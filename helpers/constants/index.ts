import dynamic from 'next/dynamic';
import { IThemeColor, ITemplate } from './index.interface';

export const SYSTEM_COLORS: IThemeColor[] = [
  {
    backgroundColor: 'white',
    fontColor: 'black',
    titleColor: '#1890ff',
    highlighterColor: 'yellowgreen',
    id: 1,
  },
  {
    backgroundColor: 'white',
    fontColor: '#780650',
    titleColor: '#254000',
    highlighterColor: 'burlywood',
    id: 2,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
    titleColor: '#217503',
    highlighterColor: '#F556E5',
    id: 3,
  },
];

export const AVAILABLE_TEMPLATES: ITemplate = {
  modern: {
    id: 'modern',
    name: 'Modern Resume',
    thumbnail: '/images/templates/modern.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/modern/MordernTemplate'), {
      ssr: false,
    }),
    inputDisplay: {
      personal: {
        name: true,
        dob: true,
        label: true,
        image: true,
        email: true,
        phone: true,
        url: true,
        summary: true,
        country: true,
        relExp: true,
        totalExp: true,
      },
      works: {
        name: true,
        position: true,
        country: true,
        url: true,
        date: true,
        summary: true,
      },
      educations: {
        institution: true,
        studyType: true,
        area: true,
        date: true,
        description: true
      },
      projects: {
        organization: true,
        position: true,
        url: true,
        date: true,
        summary: true,
      },
      awards: {
        title: true,
        date: true,
        awarder: true,
        summary: true
      },
      links: {
        linkedin: true,
        github: true,
        instagram: true,
        portfolio: true,
      },
      languages: true,
      skills: true,
      objective: true,
    },
  },
  professional: {
    id: 'professional',
    name: 'Professional Resume',
    thumbnail: '/images/templates/professional.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/professional/ProfessionalTemplate'), {
      ssr: false,
    }),
    inputDisplay: {
      personal: {
        name: true,
        dob: true,
        label: true,
        image: true,
        email: true,
        phone: true,
        url: true,
        summary: true,
        country: true,
        relExp: true,
        totalExp: true,
      },
      works: {
        name: true,
        position: true,
        country: true,
        url: true,
        date: true,
        summary: true,
      },
      educations: {
        institution: true,
        studyType: true,
        area: true,
        date: true,
        description: true
      },
      projects: {
        organization: true,
        position: true,
        url: true,
        date: true,
        summary: true,
      },
      awards: {
        title: true,
        date: true,
        awarder: true,
        summary: true
      },
      links: {
        linkedin: true,
        github: true,
        instagram: true,
        portfolio: true,
      },
      languages: true,
      skills: true,
      objective: true,
    },
  },
  simple: {
    id: 'simple',
    name: 'Simple Resume',
    thumbnail: '/images/templates/simple.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/simple/SimpleTemplate'), {
      ssr: false,
    }),
    inputDisplay: {
      personal: {
        name: true,
        dob: false,
        label: false,
        image: false,
        email: true,
        phone: true,
        url: true,
        summary: true,
        country: true,
        relExp: false,
        totalExp: false,
      },
      works: {
        name: true,
        position: true,
        country: false,
        url: false,
        date: true,
        summary: true,
      },
      educations: {
        institution: true,
        studyType: true,
        area: true,
        date: true,
        description: true
      },
      projects: false,
      awards: false,
      links: false,
      languages: false,
      skills: true,
      objective: false,
    },
  },
  basic: {
    id: 'basic',
    name: 'Basic Resume',
    thumbnail: '/images/templates/basic.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/basic/BasicTemplate'), {
      ssr: false,
    }),
    inputDisplay: {
      personal: {
        name: true,
        dob: false,
        label: false,
        image: false,
        email: true,
        phone: true,
        url: false,
        summary: true,
        country: true,
        relExp: false,
        totalExp: false,
      },
      works: {
        name: true,
        position: true,
        country: false,
        url: false,
        date: true,
        summary: true,
      },
      educations: {
        institution: true,
        studyType: true,
        area: true,
        date: true,
        description: true
      },
      projects: false,
      awards: false,
      links: false,
      languages: false,
      skills: true,
      objective: false,
    },
  },
  gray: {
    id: 'gray',
    name: 'Gray Resume',
    thumbnail: '/images/templates/gray.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/gray/GrayTemplate'), {
      ssr: false,
    }),
    inputDisplay: {
      personal: {
        name: true,
        dob: false,
        label: true,
        image: true,
        email: true,
        phone: true,
        url: false,
        summary: true,
        country: true,
        relExp: false,
        totalExp: false,
      },
      works: {
        name: true,
        position: true,
        country: true,
        url: false,
        date: true,
        summary: true,
      },
      educations: false,
      projects: {
        organization: true,
        position: true,
        url: false,
        date: true,
        summary: true,
      },
      awards: {
        title: true,
        date: true,
        awarder: true,
        summary: false
      },
      links: {
        linkedin: true,
        github: true,
        instagram: false,
        portfolio: false,
      },
      languages: true,
      skills: true,
      objective: true,
    },
  },
  semidark: {
    id: 'semidark',
    name: 'Semi Dark Resume',
    thumbnail: '/images/templates/semidark.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/semidark/SemiDarkTemplate'), {
      ssr: false,
    }),
    inputDisplay: {
      personal: {
        name: true,
        dob: false,
        label: true,
        image: true,
        email: true,
        phone: true,
        url: false,
        summary: true,
        country: true,
        relExp: false,
        totalExp: false,
      },
      works: {
        name: true,
        position: true,
        country: true,
        url: false,
        date: true,
        summary: true,
      },
      educations: {
        institution: true,
        studyType: true,
        area: true,
        date: true,
        description: false
      },
      projects: false,
      awards: {
        title: true,
        date: false,
        awarder: true,
        summary: false
      },
      links: {
        linkedin: true,
        github: false,
        instagram: false,
        portfolio: false,
      },
      languages: false,
      skills: true,
      objective: false,
    },
  },
  flat: {
    id: 'flat',
    name: 'Flat Resume',
    thumbnail: '/images/templates/flat.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/flat/FlatTemplate'), {
      ssr: false,
    }),
    inputDisplay: {
      personal: {
        name: true,
        dob: false,
        label: true,
        image: false,
        email: true,
        phone: true,
        url: false,
        summary: true,
        country: true,
        relExp: false,
        totalExp: false,
      },
      works: {
        name: true,
        position: true,
        country: true,
        url: false,
        date: true,
        summary: true,
      },
      educations: {
        institution: true,
        studyType: true,
        area: true,
        date: true,
        description: false
      },
      projects: {
        organization: true,
        position: true,
        url: false,
        date: true,
        summary: false,
      },
      awards: {
        title: true,
        date: false,
        awarder: true,
        summary: false
      },
      links: {
        linkedin: true,
        github: false,
        instagram: false,
        portfolio: false,
      },
      languages: true,
      skills: true,
      objective: false,
    },
  },
  minimalist: {
    id: 'minimalist',
    name: 'Minimalist Resume',
    thumbnail: '/images/templates/minimalist.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/minimalist/MinimalistTemplate'), {
      ssr: false,
    }),
    inputDisplay: {
      personal: {
        name: true,
        dob: false,
        label: true,
        image: false,
        email: true,
        phone: true,
        url: true,
        summary: true,
        country: true,
        relExp: false,
        totalExp: false,
      },
      works: {
        name: true,
        position: true,
        country: false,
        url: false,
        date: true,
        summary: true,
      },
      educations: {
        institution: true,
        studyType: true,
        area: true,
        date: true,
        description: true
      },
      projects: false,
      awards: false,
      links: false,
      languages: true,
      skills: true,
      objective: false,
    },
  },
  cool: {
    id: 'cool',
    name: 'Cool Resume',
    thumbnail: '/images/templates/cool.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/cool/CoolTemplate'), {
      ssr: false,
    }),
    inputDisplay: {
      personal: {
        name: true,
        dob: false,
        label: true,
        image: true,
        email: true,
        phone: true,
        url: true,
        summary: true,
        country: true,
        relExp: false,
        totalExp: false,
      },
      works: {
        name: true,
        position: true,
        country: false,
        url: false,
        date: true,
        summary: true,
      },
      educations: false,
      projects: false,
      awards: false,
      links: false,
      languages: false,
      skills: true,
      objective: true,
    },
  },
  nice: {
    id: 'nice',
    name: 'Nice Resume',
    thumbnail: '/images/templates/nice.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/nice/NiceTemplate'), {
      ssr: false,
    }),
    inputDisplay: {
      personal: {
        name: true,
        dob: false,
        label: true,
        image: false,
        email: true,
        phone: true,
        url: true,
        summary: true,
        country: true,
        relExp: false,
        totalExp: false,
      },
      works: {
        name: true,
        position: true,
        country: false,
        url: false,
        date: true,
        summary: true,
      },
      educations: {
        institution: true,
        studyType: true,
        area: true,
        date: true,
        description: false
      },
      projects: false,
      awards: {
        title: true,
        date: true,
        awarder: true,
        summary: true
      },
      links: false,
      languages: false,
      skills: true,
      objective: false,
    },
  },
  awesome: {
    id: 'awesome',
    name: 'Awesome Resume',
    thumbnail: '/images/templates/awesome.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/awesome/AwesomeTemplate'), {
      ssr: false,
    }),
    inputDisplay: {
      personal: {
        name: true,
        dob: false,
        label: true,
        image: true,
        email: true,
        phone: false,
        url: true,
        summary: true,
        country: true,
        relExp: false,
        totalExp: false,
      },
      works: {
        name: true,
        position: true,
        country: true,
        url: false,
        date: true,
        summary: true,
      },
      educations: {
        institution: true,
        studyType: true,
        area: true,
        date: true,
        description: false
      },
      projects: false,
      awards: {
        title: true,
        date: true,
        awarder: true,
        summary: true
      },
      links: {
        linkedin: true,
        github: false,
        instagram: false,
        portfolio: false,
      },
      languages: false,
      skills: true,
      objective: true,
    },
  },
  amazing: {
    id: 'amazing',
    name: 'Amazing Resume',
    thumbnail: '/images/templates/amazing.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/amazing/AmazingTemplate'), {
      ssr: false,
    }),
    inputDisplay: {
      personal: {
        name: true,
        dob: false,
        label: true,
        image: true,
        email: true,
        phone: true,
        url: true,
        summary: true,
        country: true,
        relExp: false,
        totalExp: false,
      },
      works: {
        name: true,
        position: true,
        country: false,
        url: false,
        date: true,
        summary: true,
      },
      educations: {
        institution: true,
        studyType: true,
        area: true,
        date: true,
        description: true
      },
      projects: false,
      awards: false,
      links: false,
      languages: false,
      skills: true,
      objective: false,
    },
  },
};

export const CUSTOM_THEME_COLOR: IThemeColor = {
  backgroundColor: 'white',
  fontColor: 'black',
  titleColor: 'green',
  highlighterColor: '#ff7875',
  id: 4,
};

export const DATE_PICKER_FORMAT = 'DD/MM/YYYY';
