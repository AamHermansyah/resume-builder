import create, { SetState } from 'zustand';
import { persist } from 'zustand/middleware';
import resumeData from '@/helpers/constants/resume-data.json';
import { IBasicDetailsItem, IBasicDetailsStore } from './basic.interface';

const onChangeText = (set: SetState<IBasicDetailsStore>) => (values: IBasicDetailsItem) =>
  set({ values });

export const useBasicDetails = create<IBasicDetailsStore>(
  persist(
    (set) => ({
      values: JSON.parse(localStorage.getItem('basic') || '{}')?.state?.values || resumeData.basics,
      reset: onChangeText(set),
    }),
    { name: 'basic' }
  )
);
