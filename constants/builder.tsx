import dynamic from 'next/dynamic';
import { Suspense, ReactNode } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { TbWorldWww } from 'react-icons/tb';

const FormEducations = dynamic(() => import('@/components/builder/Form/FormEducations'));
const FormExperiences = dynamic(() => import('@/components/builder/Form/FormExperiences'));
const FormPersonal = dynamic(() => import('@/components/builder/Form/FormPersonal'));
const FormProjects = dynamic(() => import('@/components/builder/Form/FormProjects'));
const FormSkills = dynamic(() => import('@/components/builder/Form/FormSkills'));
const FormLanguage = dynamic(() => import('@/components/builder/Form/FormLanguage'));
const FormObjectives = dynamic(() => import('@/components/builder/Form/FormObjectives'));
const FormCertificate = dynamic(() => import('@/components/builder/Form/FormCertificate'));
const FormLink = dynamic(() => import('@/components/builder/Form/FormLink'));

export type NavigationChild = {
  id: string,
  iconUrl?: string,
  iconSize?: number,
  alt?: string,
  href: string,
  title?: string,
  className?: string;
}

type Navigation = {
  navLeft: NavigationChild[],
  navCenter: NavigationChild[],
  navRight: NavigationChild[]
}

export type IconProfiles = {
  linkedin: ReactNode,
  github: ReactNode,
  instagram: ReactNode
}


export const navigation: Navigation = {
  navLeft: [
    {
      id: 'nav-left-1',
      iconSize: 20,
      iconUrl: '/icons/builder/back-icon.svg',
      alt: 'back',
      href: '/builder',
    },
    {
      id: 'nav-left-2',
      iconSize: 20,
      iconUrl: '/icons/builder/folder-icon.svg',
      alt: 'folder',
      href: '',
    },
    {
      id: 'nav-left-3',
      iconSize: 20,
      iconUrl: '/icons/builder/save-icon.svg',
      alt: 'save',
      href: '',
    },
  ],
  navCenter: [
    {
      id: 'nav-center-1',
      iconSize: 13.5,
      iconUrl: '/icons/builder/resume-edit-icon.svg',
      alt: 'resume-edit',
      href: '/builder',
      title: 'Resume 1'
    },
  ],
  navRight: [
    {
      id: 'nav-right-1',
      iconSize: 13.5,
      iconUrl: '/icons/builder/customize-icon.svg',
      alt: 'customize',
      href: '/home',
      title: 'Customize'
    },
    {
      id: 'nav-right-2',
      iconSize: 13.5,
      iconUrl: '/icons/builder/preview-icon.svg',
      alt: 'preview',
      href: '/',
      title: 'Preview'
    },
    {
      id: 'nav-right-3',
      iconSize: 15,
      iconUrl: '/icons/builder/download-icon.svg',
      alt: 'print',
      href: '/',
      title: 'Print'
    },
    {
      id: 'nav-right-4',
      href: '/',
      title: 'Logout',
      className: 'w-max px-4 py-2 rounded bg-white text-gray-700'
    },
  ]
}

export type Form = {
  id: string,
  title: string,
  iconUrl: string,
  component: React.ReactNode
}

export const form: Form[] = [
  {
    id: 'form-header-1',
    title: 'Professional Experience',
    iconUrl: '/icons/builder/profile-icon.svg',
    component: (
      <Suspense>
        <FormPersonal />
      </Suspense>
    )
  },
  {
    id: 'form-header-2',
    title: 'Educations',
    iconUrl: '/icons/builder/education-outline.svg',
    component: (
      <Suspense>
        <FormEducations />
      </Suspense>
    )
  },
  {
    id: 'form-header-3',
    title: 'Experiences',
    iconUrl: '/icons/builder/briefcase.svg',
    component: (
      <Suspense>
        <FormExperiences />
      </Suspense>
    )
  },
  {
    id: 'form-header-4',
    title: 'Projects',
    iconUrl: '/icons/builder/new-team-project.svg',
    component: (
      <Suspense>
        <FormProjects />
      </Suspense>
    )
  },
  {
    id: 'form-header-5',
    title: 'Skills',
    iconUrl: '/icons/builder/brain-icon.svg',
    component: (
      <Suspense>
        <FormSkills />
      </Suspense>
    )
  },
  {
    id: 'form-header-6',
    title: 'Languages',
    iconUrl: '/icons/builder/language-icon.svg',
    component: (
      <Suspense>
        <FormLanguage />
      </Suspense>
    )
  },
  {
    id: 'form-header-7',
    title: 'Objectives',
    iconUrl: '/icons/builder/mask-icon.svg',
    component: (
      <Suspense>
        <FormObjectives />
      </Suspense>
    )
  },
  {
    id: 'form-header-8',
    title: 'Certifications',
    iconUrl: '/icons/builder/news-paper.svg',
    component: (
      <Suspense>
        <FormCertificate />
      </Suspense>
    )
  },
  {
    id: 'form-header-9',
    title: 'Links',
    iconUrl: '/icons/builder/links-fill.svg',
    component: (
      <Suspense>
        <FormLink />
      </Suspense>
    )
  },
];

export const iconProfiles: IconProfiles = {
  linkedin: <AiFillLinkedin fontSize={20} />,
  github: <AiFillGithub fontSize={20} />,
  instagram: <AiFillInstagram fontSize={20} />
}