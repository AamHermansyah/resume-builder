export type Navigation = {
  id: string,
  title: string,
  href: string
}

export type Hero = {
  id: string,
  positionClass: string,
  sizeClass: string,
  backgroundClass: string,
}

export type WhyUs = {
  id: string,
  imageUrl: string,
  title: string,
  description: string,
  alt: string,
}

export type Steps = {
  id: string,
  content: string
}

type EditorFooter = {
  title: string,
  links: Navigation[]
};

type HelpFooter = {
  title: string,
  links: Navigation[]
};

export type Footer = {
  editor: EditorFooter,
  help: HelpFooter
}

export const navigation: Navigation[] = [
  {
    id: 'nav-1',
    title: "Home",
    href: "/",
  },
  {
    id: 'nav-2',
    title: "About Us",
    href: "/",
  },
  {
    id: 'nav-3',
    title: "Create Resume",
    href: "/",
  },
  {
    id: 'nav-4',
    title: "Contribute",
    href: "/",
  },
  {
    id: 'nav-5',
    title: "FAQs",
    href: "/",
  },
]

export const whyUsBlurElement: Hero[] = [
  {
    id: 'blur-1',
    positionClass: '-top-[120px] -right-[75px]',
    sizeClass: 'w-[313px] aspect-square',
    backgroundClass: 'linear-gradient(180deg, #F7ABA1 0%, #ED9296 100%)'
  },
  {
    id: 'blur-2',
    positionClass: '-bottom-[170px] -right-[75px]',
    sizeClass: 'w-[313px] aspect-square',
    backgroundClass: 'linear-gradient(180deg, #D76275 0%, #A95175 100%)'
  },
  {
    id: 'blur-3',
    positionClass: '-bottom-[100px] -left-[75px]',
    sizeClass: 'w-[313px] aspect-square',
    backgroundClass: 'linear-gradient(180deg, #FAA997 0%, #F7988C 100%)'
  },
  {
    id: 'blur-4',
    positionClass: '-top-[190px] -left-[55px]',
    sizeClass: 'w-[313px] aspect-square',
    backgroundClass: 'linear-gradient(180deg, #FAB8AF 0%, #FFD9D8 100%)'
  },
]

export const whyUs: WhyUs[] = [
  {
    id: 'feature-1',
    title: 'Customize with templates & Themes',
    imageUrl: '/icons/grid-icon.svg',
    alt: 'grid-icon',
    description: 'do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et'
  },
  {
    id: 'feature-2',
    title: 'Simple Interface that helps you build quickly',
    imageUrl: '/icons/hand-icon.svg',
    alt: 'hand-icon',
    description: 'do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et'
  },
  {
    id: 'feature-3',
    title: 'No sign up needed - go straight to building',
    imageUrl: '/icons/pencil-icon.svg',
    alt: 'pencil-icon',
    description: 'do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et'
  },
  {
    id: 'feature-4',
    title: 'Your data never leaves your device',
    imageUrl: '/icons/data-icon.svg',
    alt: 'data-icon',
    description: 'do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et'
  },
]

export const steps: Steps[] = [
  {
    id: 'step-1',
    content: 'Pick a Template'
  },
  {
    id: 'step-2',
    content: 'Customize Your Resume Layout'
  },
  {
    id: 'step-3',
    content: 'Fill Your Details'
  },
  {
    id: 'step-4',
    content: 'Download Your Resume'
  },
]

export const footer: Footer = {
  editor: {
    title: 'Editor',
    links: [
      {
        id: 'editor-1',
        title: "About",
        href: "/",
      },
      {
        id: 'editor-2',
        title: "Patners",
        href: "/",
      },
      {
        id: 'editor-3',
        title: "Privacy Policy",
        href: "/",
      },
      {
        id: 'editor-4',
        title: "Terms of Service",
        href: "/",
      },
    ]
  },
  help: {
    title: 'Help',
    links: [
      {
        id: 'help-1',
        title: "Press Kit",
        href: "/",
      },
      {
        id: 'help-2',
        title: "Contact Us",
        href: "/",
      },
    ]
  }
}

export const hero: Hero[] = [
  {
    id: 'blur-1',
    positionClass: '-top-[100px] -right-[75px]',
    sizeClass: 'w-[665px] aspect-square',
    backgroundClass: 'linear-gradient(180deg, #F7ABA1 0%, #ED9296 100%)'
  },
  {
    id: 'blur-2',
    positionClass: '-bottom-[100px] -right-[75px]',
    sizeClass: 'w-[576px] aspect-square',
    backgroundClass: 'linear-gradient(180deg, #D76275 0%, #A95175 100%)'
  },
  {
    id: 'blur-3',
    positionClass: '-top-[169px] -left-[108px]',
    sizeClass: 'w-[597px] aspect-square',
    backgroundClass: 'linear-gradient(180deg, #F5C7A1 0%, #F8B193 100%)'
  },
  {
    id: 'blur-4',
    positionClass: '-top-[89px] left-[20%]',
    sizeClass: 'w-[532px] aspect-square',
    backgroundClass: 'linear-gradient(180deg, #FAB8AF 0%, #FFD9D8 100%)'
  },
  {
    id: 'blur-5',
    positionClass: 'top-[272px] -left-[120px]',
    sizeClass: 'w-[586px] aspect-square',
    backgroundClass: 'linear-gradient(180deg, #F5C7A1 0%, #F8B193 100%)'
  },
  {
    id: 'blur-6',
    positionClass: 'top-[280px] left-[20%]',
    sizeClass: 'w-[629px] aspect-square',
    backgroundClass: 'linear-gradient(180deg, #F7ABA1 0%, #ED9296 100%)'
  },
]