import dayjs from 'dayjs';

export interface IProfile {
  network: string;
  value: string;
}

export type IBasicLanguage = {
  value: string;
  level: number;
}

export interface IBasics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  objective: string;
  country: string;
  relExp: string;
  totalExp: string;
  profiles: IProfile[];
  languages: IBasicLanguage[];
}

export interface ISkillsIntrf {
  name: string;
  level: number;
}

export interface IWorkIntrf {
  id?: string;
  name: string;
  position: string;
  country: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  years: string;
  isWorkingHere: boolean;
  website: string;
}

export interface IEducation {
  id?: string;
  institution: string;
  url: string;
  studyType: string;
  area: string;
  startDate: string;
  isStudyingHere: boolean;
  endDate: string;
  website: string;
  description: string
}

export interface IVolunteer {
  id?: string;
  organization: string;
  position: string;
  url: string;
  startDate: string | null;
  endDate: string | null;
  summary: string;
  isVolunteeringNow: boolean;
}

export interface IAwards {
  id?: string;
  title: string;
  awarder: string;
  date: dayjs.Dayjs;
  summary: string;
}

export interface IResume {
  basics: IBasics;
  skills: ISkillsIntrf[];
  work: IWorkIntrf[];
  education: IEducation[];
  volunteer: IVolunteer[];
  awards: IAwards[];
}
