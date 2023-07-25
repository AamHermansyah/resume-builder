export interface IThemeColor {
  backgroundColor: string;
  fontColor: string;
  titleColor: string;
  highlighterColor: string;
  id: number;
}

export interface IInputDisplay {
  [key: string]: boolean;
}

export type IFormDisplay = boolean;

export interface InputValidator {
  personal: IInputDisplay | IFormDisplay;
  educations: IInputDisplay | IFormDisplay;
  works: IInputDisplay | IFormDisplay;
  projects: IInputDisplay | IFormDisplay;
  skills: IFormDisplay;
  languages: IFormDisplay;
  objective: IFormDisplay;
  awards: IInputDisplay | IFormDisplay;
  links: IInputDisplay | IFormDisplay;
}

export interface ITemplate {
  [key: string]: {
    id: string;
    name: string;
    thumbnail: string;
    component: React.FC<{ widthClassName?: string }>;
    inputDisplay: InputValidator;
  };
}

export interface ITemplateContent {
  id: string;
  name: string;
  thumbnail: string;
  component: React.FC<{ widthClassName?: string }>;
}
