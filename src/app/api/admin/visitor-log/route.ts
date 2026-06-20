import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existingLog = await prisma.visitorLog.findUnique({
      where: { date: today },
    });

    if (existingLog) {
      await prisma.visitorLog.update({
        where: { date: today },
        data: { count: { increment: 1 } },
      });
    } else {
      await prisma.visitorLog.create({
        data: {
          date: today,
          count: 1,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Visitor log error:', error);
    return NextResponse.json({ error: 'Failed to log visitor' }, { status: 500 });
  }
}
