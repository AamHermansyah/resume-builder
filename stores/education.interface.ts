export interface IEducationItem {
  institution: string;
  studyType: string;
  area: string;
  startDate: string | null;
  isStudyingHere: boolean;
  endDate: string | null;
  id: string;
  description: string
}

export interface IEducationStore {
  academics: IEducationItem[] | null;
  add: (newEducation: IEducationItem) => void;
  get: (index: number) => void;
  remove: (index: number) => void;
  reset: (values: IEducationItem[]) => void;
  onmoveup: (index: number) => void;
  onmovedown: (index: number) => void;
  updateEducation: (index: number, updatedInfo: IEducationItem) => void;
}
