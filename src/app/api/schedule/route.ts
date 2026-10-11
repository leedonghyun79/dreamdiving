import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { isAdmin } from '@/lib/adminAuth';
import { SCHEDULE_PROGRAMS } from '@/app/constants/schedule';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const MONTH_RE = /^\d{4}-\d{2}$/;


export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const program = searchParams.get('program');
  const month = searchParams.get('month');
  if (!program || !month || !MONTH_RE.test(month)) {
    return NextResponse.json({ error: 'program, month(YYYY-MM) required' }, { status: 400 });
  }
  try {
    // YYYY-MM-DD 문자열 비교라 월 범위는 prefix 로 충분
    const items = await prisma.schedule.findMany({
      where: { program, date: { startsWith: month } },
      orderBy: [{ date: 'asc' }, { time: 'asc' }],
    });
    return NextResponse.json(items);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch schedules' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await request.json();
    const title = typeof body.title === 'string' ? body.title.trim() : '';
    if (
      !SCHEDULE_PROGRAMS.some((p) => p.id === body.program) ||
      !DATE_RE.test(body.date) ||
      !title
    ) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }
    const capacity = Number.isInteger(body.capacity) && body.capacity > 0 ? body.capacity : null;
    const item = await prisma.schedule.create({
      data: {
        program: body.program,
        date: body.date,
        title,
        time: body.time || null,
        capacity,
        memo: body.memo?.trim() || null,
      },
    });
    return NextResponse.json(item, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create schedule' }, { status: 500 });
  }
}
