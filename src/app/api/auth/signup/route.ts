import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/password';
import { EMAIL_RE, isValidPassword } from '@/lib/passwordRules';

export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown; password?: unknown; passwordConfirm?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: '잘못된 요청입니다.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const password = typeof body.password === 'string' ? body.password : '';
  const passwordConfirm = typeof body.passwordConfirm === 'string' ? body.passwordConfirm : '';

  // 서버에서도 한 번 더 검증 (클라이언트 검증은 우회될 수 있음)
  if (!name) return NextResponse.json({ message: '이름을 입력해주세요.' }, { status: 400 });
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ message: '이메일을 올바르게 입력해주세요.' }, { status: 400 });
  }
  if (!isValidPassword(password, email)) {
    return NextResponse.json({ message: '비밀번호 조건을 확인해주세요.' }, { status: 400 });
  }
  if (password !== passwordConfirm) {
    return NextResponse.json({ message: '비밀번호가 일치하지 않아요.' }, { status: 400 });
  }

  // 이미 가입된 이메일인지 확인
  const exists = await prisma.user.findUnique({ where: { email }, select: { id: true } });
  if (exists) {
    return NextResponse.json({ message: '이미 가입된 이메일입니다.' }, { status: 409 });
  }

  // 평문 비밀번호는 저장하지 않고 해시만 저장
  const passwordHash = await hashPassword(password);

  const user = await prisma.user.create({
    data: { name, email, passwordHash },
    select: { id: true, email: true, name: true, createdAt: true },
  });

  return NextResponse.json({ user }, { status: 201 });
}
