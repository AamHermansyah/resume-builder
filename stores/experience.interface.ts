export interface IExperienceItem {
  id?: string;
  name: string;
  position: string;
  country: string;
  url: string;
  startDate: string | null;
  endDate: string | null;
  years: string;
  summary: string;
  isWorkingHere: boolean;
}

export interface IExperienceStore {
  experiences: IExperienceItem[] | null;
  add: (newExperience: IExperienceItem) => void;
  get: (index: number) => IExperienceItem;
  remove: (index: number) => void;
  reset: (values: IExperienceItem[]) => void;
  onmoveup: (index: number) => void;
  onmovedown: (index: number) => void;
  updateExperience: (index: number, updatedInfo: IExperienceItem) => void;
} 
