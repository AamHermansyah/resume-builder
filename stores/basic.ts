import create, { SetState } from 'zustand';
import { persist } from 'zustand/middleware';
import resumeData from '@/helpers/constants/resume-data.json';
import { IBasicDetailsItem, IBasicDetailsStore } from './basic.interface';

const onChangeText = (set: SetState<IBasicDetailsStore>) => (values: IBasicDetailsItem) =>
  set({ values });

export const useBasicDetails = create<IBasicDetailsStore>(
  // @ts-ignore
  persist(
    (set) => ({
      values: resumeData.basics,
      reset: onChangeText(set),
    }),
    { name: 'basic' }
  )
);
