import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await prisma.visitorLog.upsert({
      where: { date: today },
      update: { count: { increment: 1 } },
      create: {
        date: today,
        count: 1,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Visitor log error:', error);
    return NextResponse.json({ error: 'Failed to log visitor' }, { status: 500 });
  }
}
