import { json } from '@/lib/json';
import { prisma } from '@/db';
import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

const secret = 'your-secret-key'; // Ganti dengan kunci rahasia yang sesuai

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  try {
    // Cek apakah email sudah terdaftar
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      // Buat token JWT
      const token = jwt.sign({ userId: existingUser.id }, secret, { expiresIn: '1h' });

      await prisma.$disconnect();
      return new Response(json({
        message: 'Email has already been registered',
        status: 400,
        token,
        user: existingUser
      }));
    }

    const hashedPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Buat token JWT
    const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

    // Lakukan tindakan setelah berhasil sign up, misalnya mengirim respon dengan token JWT
    await prisma.$disconnect();
    return new Response(json({
      message: 'User signup successfully',
      status: 201,
      user,
      token
    }));
  } catch (error) {
    console.error('Error signing up user:', error);
    await prisma.$disconnect();
    return new Response(json({ message: 'Internal server error', status: 500 }));
  }
}
