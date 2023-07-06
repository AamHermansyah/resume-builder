import { json } from '@/utils/json';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secret = 'your-secret-key'; // Ganti dengan kunci rahasia yang sesuai

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    // Cek apakah user dengan email yang diberikan ada
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      await prisma.$disconnect();
      return new Response(json({ message: 'Invalid email or password', status: 400 }));
    }

    // Verifikasi password
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      await prisma.$disconnect();
      return new Response(json({ message: 'Invalid email or password', status: 400 }));
    }

    // Buat token JWT
    const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

    // Lakukan tindakan setelah berhasil login, misalnya mengirim respon dengan token JWT
    await prisma.$disconnect();
    return new Response(json({ token, user, status: 200 }));
  } catch (error) {
    console.error('Error logging in:', error);
    await prisma.$disconnect();
    return new Response(json({ message: 'Internal server error', status: 500 }));
  }
}
