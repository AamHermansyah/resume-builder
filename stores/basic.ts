import create, { SetState } from 'zustand';
import { persist } from 'zustand/middleware';
import { IBasicDetailsItem, IBasicDetailsStore } from './basic.interface';

const onChangeText = (set: SetState<IBasicDetailsStore>) => (values: IBasicDetailsItem) =>
  set({ values });

export const useBasicDetails = create<IBasicDetailsStore>(
  // @ts-ignore
  persist(
    (set, get) => ({
      values: null,
      reset: onChangeText(set),
    }),
    { name: 'basic' }
  )
);
