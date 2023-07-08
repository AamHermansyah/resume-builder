import { json } from '@/utils/json';
import { prisma } from '@/db';
import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

const secret = 'your-secret-key'; // Ganti dengan kunci rahasia yang sesuai

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return new Response(json({
      message: 'Email query is not exist',
      status: 400,
    }));
  }

  try {
    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      // Buat token JWT
      const token = jwt.sign({ userId: existingUser.id }, secret, { expiresIn: '1h' });

      await prisma.$disconnect();
      return new Response(json({
        status: 200,
        token,
        user: existingUser
      }));
    }

    // Lakukan tindakan setelah berhasil sign up, misalnya mengirim respon dengan token JWT
    await prisma.$disconnect();
    return new Response(json({
      message: 'User not found',
      status: 404,
    }));
  } catch (error) {
    console.error('Error to get user:', error);
    await prisma.$disconnect();
    return new Response(json({ message: 'Internal server error', status: 500 }));
  }
}
