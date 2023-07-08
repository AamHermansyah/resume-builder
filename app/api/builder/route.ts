import { json } from '@/utils/json';
import { prisma } from '@/db';

export async function POST(req: Request) {
  const { data: resume, userId } = await req.json();

  try {
    // Membuat data Resume
    const createdResume = await prisma.resume.create({
      data: {
        user: { connect: { id: userId } },
        basics: {
          create: {
            name: resume.basics.name,
            dob: resume.basics.dob,
            label: resume.basics.label,
            image: resume.basics.image,
            email: resume.basics.email,
            phone: resume.basics.phone,
            url: resume.basics.url,
            summary: resume.basics.summary,
            country: resume.basics.country,
            relExp: resume.basics.relExp,
            totalExp: resume.basics.totalExp,
            objective: resume.basics.objective,
            languages: {
              // @ts-ignore
              create: resume.basics.languages.map((language) => ({
                value: language.value,
                level: language.level,
              })),
            },
            profiles: {
              // @ts-ignore
              create: resume.basics.profiles.map((profile) => ({
                network: profile.network,
                value: profile.value,
              })),
            },
          },
        },
        skills: {
          create: {
            languages: {
              // @ts-ignore
              create: resume.skills.languages.map((language) => ({
                name: language.name,
                level: language.level,
              })),
            },
            frameworks: {
              // @ts-ignore
              create: resume.skills.frameworks.map((framework) => ({
                name: framework.name,
                level: framework.level,
              })),
            },
            technologies: {
              // @ts-ignore
              create: resume.skills.technologies.map((technology) => ({
                name: technology.name,
                level: technology.level,
              })),
            },
            tools: {
              // @ts-ignore
              create: resume.skills.tools.map((tool) => ({
                name: tool.name,
                level: tool.level,
              })),
            },
          },
        },
        work: {
          // @ts-ignore
          create: resume.work.map((work) => ({
            name: work.name,
            position: work.position,
            country: work.country,
            url: work.url,
            startDate: work.startDate,
            isWorkingHere: work.isWorkingHere,
            endDate: work.endDate,
            summary: work.summary,
            years: work.years,
          })),
        },
        education: {
          // @ts-ignore
          create: resume.education.map((education) => ({
            institution: education.institution,
            studyType: education.studyType,
            area: education.area,
            startDate: education.startDate,
            isStudyingHere: education.isStudyingHere,
            endDate: education.endDate,
            description: education.description,
          })),
        },
        awards: {
          // @ts-ignore
          create: resume.awards.map((award) => ({
            title: award.title,
            date: award.date,
            awarder: award.awarder,
            summary: award.summary,
          })),
        },
        volunteer: {
          // @ts-ignore
          create: resume.volunteer.map((volunteer) => ({
            organization: volunteer.organization,
            position: volunteer.position,
            url: volunteer.url,
            startDate: volunteer.startDate,
            endDate: volunteer.endDate,
            summary: volunteer.summary,
            isVolunteeringNow: volunteer.isVolunteeringNow,
          })),
        },
      },
      include: {
        basics: {
          include: {
            languages: true,
            profiles: true,
          },
        },
        skills: {
          include: {
            languages: true,
            frameworks: true,
            technologies: true,
            tools: true,
          },
        },
        work: true,
        education: true,
        awards: true,
        volunteer: true,
      },
    });

    return new Response(json({
      message: 'Data successfully created',
      status: 201,
      data: createdResume
    }));

  } catch (error) {
    console.error('Error creating resume:', error);
    return new Response(json({ message: 'Internal server error', status: 500 }));
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    const resume = await prisma.resume.findFirst({
      where: {
        userId: id,
      },
      include: {
        basics: {
          include: {
            languages: true,
            profiles: true,
          },
        },
        skills: {
          include: {
            languages: true,
            frameworks: true,
            technologies: true,
            tools: true,
          },
        },
        work: true,
        education: true,
        awards: true,
        volunteer: true,
      },
    });

    await prisma.$disconnect();

    if (!resume) {
      return new Response(json({ message: 'Resume not found', status: 404 }));
    }

    return new Response(json({ data: resume, status: 200 }));
  } catch (error) {
    console.error(error);

    await prisma.$disconnect();
    return new Response(json({ message: 'Internal server error', status: 500 }));
  }
}

export async function PUT(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const userId = searchParams.get('userId');

  const { data: resume } = await req.json();

  try {
    // Delete existing Resume
    await prisma.resume.delete({
      where: {
        id: id!,
      },
    });

    // Create new Resume
    const createdResume = await prisma.resume.create({
      data: {
        id: id!,
        user: { connect: { id: userId! } },
        basics: {
          create: {
            name: resume.basics.name,
            dob: resume.basics.dob,
            label: resume.basics.label,
            image: resume.basics.image,
            email: resume.basics.email,
            phone: resume.basics.phone,
            url: resume.basics.url,
            summary: resume.basics.summary,
            country: resume.basics.country,
            relExp: resume.basics.relExp,
            totalExp: resume.basics.totalExp,
            objective: resume.basics.objective,
            languages: {
              // @ts-ignore
              create: resume.basics.languages.map((language) => ({
                value: language.value,
                level: language.level,
              })),
            },
            profiles: {
              // @ts-ignore
              create: resume.basics.profiles.map((profile) => ({
                network: profile.network,
                value: profile.value,
              })),
            },
          },
        },
        skills: {
          create: {
            languages: {
              // @ts-ignore
              create: resume.skills.languages.map((language) => ({
                name: language.name,
                level: language.level,
              })),
            },
            frameworks: {
              // @ts-ignore
              create: resume.skills.frameworks.map((framework) => ({
                name: framework.name,
                level: framework.level,
              })),
            },
            technologies: {
              // @ts-ignore
              create: resume.skills.technologies.map((technology) => ({
                name: technology.name,
                level: technology.level,
              })),
            },
            tools: {
              // @ts-ignore
              create: resume.skills.tools.map((tool) => ({
                name: tool.name,
                level: tool.level,
              })),
            },
          },
        },
        work: {
          // @ts-ignore
          create: resume.work.map((work) => ({
            name: work.name,
            position: work.position,
            country: work.country,
            url: work.url,
            startDate: work.startDate,
            isWorkingHere: work.isWorkingHere,
            endDate: work.endDate,
            summary: work.summary,
            years: work.years,
          })),
        },
        education: {
          // @ts-ignore
          create: resume.education.map((education) => ({
            institution: education.institution,
            studyType: education.studyType,
            area: education.area,
            startDate: education.startDate,
            isStudyingHere: education.isStudyingHere,
            endDate: education.endDate,
            description: education.description,
          })),
        },
        awards: {
          // @ts-ignore
          create: resume.awards.map((award) => ({
            title: award.title,
            date: award.date,
            awarder: award.awarder,
            summary: award.summary,
          })),
        },
        volunteer: {
          // @ts-ignore
          create: resume.volunteer.map((volunteer) => ({
            organization: volunteer.organization,
            position: volunteer.position,
            url: volunteer.url,
            startDate: volunteer.startDate,
            endDate: volunteer.endDate,
            summary: volunteer.summary,
            isVolunteeringNow: volunteer.isVolunteeringNow,
          })),
        },
      },
    });

    return new Response(json({
      message: 'Data successfully replaced',
      status: 200,
      data: createdResume
    }));
  } catch (error) {
    console.error('Error replacing resume:', error);
    return new Response(json({
      message: 'Internal server error',
      status: 500
    }));
  } finally {
    await prisma.$disconnect();
  }
}

