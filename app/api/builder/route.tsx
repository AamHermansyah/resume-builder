import { json } from '@/utils/json';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { data } = await req.json();
    const createdResume = await prisma.resume.create({ data });

    await prisma.$disconnect();

    return new Response(json({ data: createdResume, status: 200 }));
  } catch (error) {
    console.error(error);

    await prisma.$disconnect();
    return new Response(json({ message: 'Internal server error', status: 500 }));
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    const resume = await prisma.resume.findFirst({
      where: {
        id: Number(id),
      },
    });

    await prisma.$disconnect();

    if (!resume) {
      return new Response(json({ message: 'Data tidak ditemukan', status: 404 }));
    }

    return new Response(json({ data: resume, status: 200 }));
  } catch (error) {
    console.error(error);

    await prisma.$disconnect();
    return new Response(json({ message: 'Internal server error', status: 500 }));
  }
}
