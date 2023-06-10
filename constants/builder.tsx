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
      href: '/',
    },
    {
      id: 'nav-left-3',
      iconSize: 20,
      iconUrl: '/icons/builder/save-icon.svg',
      alt: 'save',
      href: '/',
    },
  ],
  navCenter: [
    {
      id: 'nav-center-1',
      iconSize: 13.5,
      iconUrl: '/icons/builder/resume-edit-icon.svg',
      alt: 'resume-edit',
      href: '/',
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
      alt: 'download',
      href: '/',
      title: 'Download'
    },
  ]
}