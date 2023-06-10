export type Navigation = {
  id: string,
  title: string,
  href: string
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

export const whyUs: WhyUs[] = [
  {
    id: 'feature-1',
    title: 'Customize with templates & Themes',
    imageUrl: '/icons/landing-page/grid-icon.svg',
    alt: 'grid-icon',
    description: 'do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et'
  },
  {
    id: 'feature-2',
    title: 'Simple Interface that helps you build quickly',
    imageUrl: '/icons/landing-page/hand-icon.svg',
    alt: 'hand-icon',
    description: 'do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et'
  },
  {
    id: 'feature-3',
    title: 'No sign up needed - go straight to building',
    imageUrl: '/icons/landing-page/pencil-icon.svg',
    alt: 'pencil-icon',
    description: 'do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et dolore magna aliqua do eiusmod tempor incididunt ut labore et'
  },
  {
    id: 'feature-4',
    title: 'Your data never leaves your device',
    imageUrl: '/icons/landing-page/data-icon.svg',
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