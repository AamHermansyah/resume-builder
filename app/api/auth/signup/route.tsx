import { json } from '@/utils/json';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secret = 'your-secret-key'; // Ganti dengan kunci rahasia yang sesuai

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  try {
    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      await prisma.$disconnect();
      return new Response(json({ message: 'Email has already been registered', status: 400 }));
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Lakukan tindakan setelah berhasil sign up, misalnya mengirim respon dengan token JWT
    await prisma.$disconnect();
    return new Response(json({ message: 'User signup successfully', status: 201 }));
  } catch (error) {
    console.error('Error signing up user:', error);
    await prisma.$disconnect();
    return new Response(json({ message: 'Internal server error', status: 500 }));
  }
}
