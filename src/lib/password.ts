import bcrypt from 'bcryptjs';

// 해시 비용 (값이 클수록 안전하지만 느려짐)
const SALT_ROUNDS = 12;

// 평문 비밀번호를 해시로 바꿔서 반환 (DB에는 이 값만 저장)
export async function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, SALT_ROUNDS);
}

// 입력한 비밀번호가 저장된 해시와 맞는지 확인
export async function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}
