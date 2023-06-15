import FormEducations from "@/components/builder/Form/FormEducations"
import FormExperience from "@/components/builder/Form/FormExperience"
import FormPersonal from "@/components/builder/Form/FormPersonal"
import FormProjects from "@/components/builder/Form/FormProjects"
import FormSkills from "@/components/builder/Form/FormSkills"
import FormLanguage from "@/components/builder/Form/FormLanguage"
import FormExtracurricular from "@/components/builder/Form/FormExtracurricular"
import FormCertificate from "@/components/builder/Form/FormCertificate"
import FormLink from "@/components/builder/Form/FormLink"

export type NavigationChild = {
  id: string,
  iconUrl: string,
  iconSize: number,
  alt: string,
  href: string,
  title?: string
}

type Navigation = {
  navLeft: NavigationChild[],
  navCenter: NavigationChild[],
  navRight: NavigationChild[]
}

export const navigation: Navigation = {
  navLeft: [
    {
      id: 'nav-left-1',
      iconSize: 20,
      iconUrl: '/icons/builder/back-icon.svg',
      alt: 'back',
      href: '/',
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
      href: '',
      title: 'Resume 1'
    },
  ],
  navRight: [
    {
      id: 'nav-right-1',
      iconSize: 13.5,
      iconUrl: '/icons/builder/customize-icon.svg',
      alt: 'customize',
      href: '/',
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
    component: <FormPersonal />
  },
  {
    id: 'form-header-2',
    title: 'Educations',
    iconUrl: '/icons/builder/education-outline.svg',
    component: <FormEducations />
  },
  {
    id: 'form-header-3',
    title: 'Experiences',
    iconUrl: '/icons/builder/briefcase.svg',
    component: <FormExperience />
  },
  {
    id: 'form-header-4',
    title: 'Projects',
    iconUrl: '/icons/builder/new-team-project.svg',
    component: <FormProjects />
  },
  {
    id: 'form-header-5',
    title: 'Skills',
    iconUrl: '/icons/builder/brain-icon.svg',
    component: <FormSkills />
  },
  {
    id: 'form-header-6',
    title: 'Languages',
    iconUrl: '/icons/builder/language-icon.svg',
    component: <FormLanguage/>
  },
  {
    id: 'form-header-7',
    title: 'Extracurricular Activities',
    iconUrl: '/icons/builder/mask-icon.svg',
    component: <FormExtracurricular/>
  },
  {
    id: 'form-header-8',
    title: 'Certifications',
    iconUrl: '/icons/builder/news-paper.svg',
    component: <FormCertificate/>
  },
  {
    id: 'form-header-9',
    title: 'Links',
    iconUrl: '/icons/builder/links-fill.svg',
    component: <FormLink/>
  },
]