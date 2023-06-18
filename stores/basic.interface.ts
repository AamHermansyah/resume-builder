export type IProfiles = {
  network: string;
  value: string;
};

type ILocation = {
  address: string;
  postalCode: string;
  country: string;
  countryCode: string;
  region: string;
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
  location: ILocation;
  relExp: string;
  totalExp: string;
  objective: string;
  languages: IBasicLanguage[];
  profiles: IProfiles[];
}

export interface IBasicDetailsStore {
  values: IBasicDetailsItem;
  reset: (values: IBasicDetailsItem) => void;
}
