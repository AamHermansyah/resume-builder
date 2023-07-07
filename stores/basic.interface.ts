export type IProfiles = {
  network: string;
  value: string;
};

export type IBasicLanguage = {
  value: string;
  level: number;
}

export interface IBasicDetailsItem {
  name: string;
  dob: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  country: string;
  relExp: string;
  totalExp: string;
  objective: string;
  languages: IBasicLanguage[];
  profiles: IProfiles[];
}

export interface IBasicDetailsStore {
  values: IBasicDetailsItem | null;
  reset: (values: IBasicDetailsItem) => void;
}
