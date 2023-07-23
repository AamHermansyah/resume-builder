import create, { GetState, SetState } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';
import { ISkillItem, ISkillState } from './skill.interface';
import resumeData from '@/helpers/constants/resume-data.json';

const addSkill =
  (set: SetState<ISkillState>) =>
    ({ name, level }: ISkillItem) =>
      set(
        produce((state: ISkillState) => {
          state.values!.push({ name, level });
        })
      );

const removeSkill = (set: SetState<ISkillState>) => (index: number) =>
  set(
    produce((state: ISkillState) => {
      state.values!.splice(index, 1);
    })
  );

const setSkills = (set: SetState<ISkillState>) => (values: ISkillItem[]) => set(() => ({ values }));

const getSkills = (get: GetState<ISkillState>) => () => get().values;

const getMethods = (set: SetState<ISkillState>, get: GetState<ISkillState>) => ({
  get: getSkills(get),
  add: addSkill(set),
  remove: removeSkill(set),
  reset: setSkills(set),
});

export const useSkills = create<ISkillState>(
  // @ts-ignore
  persist(
    (set, get) => ({
      title: 'Skills',
      values: resumeData.skills,

      ...getMethods(set, get),
    }),
    { name: 'skills' }
  )
);
