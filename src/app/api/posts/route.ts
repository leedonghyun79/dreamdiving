import { prisma } from '@/lib/prisma';
import { isAdmin } from '@/lib/adminAuth';
import { getBoard } from '@/app/constants/board';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await request.json();
    const title = typeof body.title === 'string' ? body.title.trim() : '';
    const content = typeof body.content === 'string' ? body.content.trim() : '';
    if (!getBoard(body.board) || !title || !content) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }
    const post = await prisma.post.create({ data: { board: body.board, title, content } });
    return NextResponse.json(post, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
