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
  },
  professional: {
    id: 'professional',
    name: 'Professional Resume',
    thumbnail: '/images/templates/professional.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/professional/ProfessionalTemplate'), {
      ssr: false,
    }),
  },
  simple: {
    id: 'simple',
    name: 'Simple Resume',
    thumbnail: '/images/templates/simple.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/simple/SimpleTemplate'), {
      ssr: false,
    }),
  },
  basic: {
    id: 'basic',
    name: 'Basic Resume',
    thumbnail: '/images/templates/basic.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/basic/BasicTemplate'), {
      ssr: false,
    }),
  },
  gray: {
    id: 'gray',
    name: 'Gray Resume',
    thumbnail: '/images/templates/gray.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/gray/GrayTemplate'), {
      ssr: false,
    }),
  },
  semidark: {
    id: 'semidark',
    name: 'Semi Dark Resume',
    thumbnail: '/images/templates/semidark.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/semidark/SemiDarkTemplate'), {
      ssr: false,
    }),
  },
  flat: {
    id: 'flat',
    name: 'Flat Resume',
    thumbnail: '/images/templates/flat.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/flat/FlatTemplate'), {
      ssr: false,
    }),
  },
  minimalist: {
    id: 'minimalist',
    name: 'Minimalist Resume',
    thumbnail: '/images/templates/minimalist.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/minimalist/MinimalistTemplate'), {
      ssr: false,
    }),
  },
  cool: {
    id: 'cool',
    name: 'Cool Resume',
    thumbnail: '/images/templates/cool.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/cool/CoolTemplate'), {
      ssr: false,
    }),
  },
  nice: {
    id: 'nice',
    name: 'Nice Resume',
    thumbnail: '/images/templates/nice.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/nice/NiceTemplate'), {
      ssr: false,
    }),
  },
  awesome: {
    id: 'awesome',
    name: 'Awesome Resume',
    thumbnail: '/images/templates/awesome.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/awesome/AwesomeTemplate'), {
      ssr: false,
    }),
  },
  amazing: {
    id: 'amazing',
    name: 'Amazing Resume',
    thumbnail: '/images/templates/amazing.png',
    // @ts-ignore
    component: dynamic(() => import('@/templates/amazing/AmazingTemplate'), {
      ssr: false,
    }),
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
