import dynamic from 'next/dynamic';
import { IThemeColor, ITemplate } from './index.interface';

const MordernTemplate = dynamic(() => import('@/templates/modern/MordernTemplate'));
const ProfessionalTemplate = dynamic(() => import('@/templates/professional/ProfessionalTemplate'));

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
    thumbnail: '/templates/modern.png',
<<<<<<< Updated upstream
    // @ts-ignore
    component: dynamic(() => import('@/templates/professional/ProfessionalTemplate'), {
      ssr: false,
    }),
=======
    component: (widthClassName = '') => <MordernTemplate widthClassName={widthClassName} />
>>>>>>> Stashed changes
  },
  professional: {
    id: 'professional',
    name: 'Professional Resume',
    thumbnail: '/templates/professional.png',
<<<<<<< Updated upstream
    // @ts-ignore
    component: dynamic(() => import('@/templates/professional/ProfessionalTemplate'), {
      ssr: false,
    }),
=======
    component: (widthClassName = '') => <ProfessionalTemplate widthClassName={widthClassName} />
>>>>>>> Stashed changes
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
