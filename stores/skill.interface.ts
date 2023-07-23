export interface ISkillItem {
  name: string;
  level: number;
}

export interface ISkillState {
  title: string;
  values: ISkillItem[] | null;

  add: ({ name, level }: { name: string; level: number }) => void;
  remove: (index: number) => void;
  get: () => void;
  reset: (name: ISkillItem[]) => void;
}
