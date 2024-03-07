import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createSelectors } from './utils';

let resolveHydrationValue;
const hasHydrated = new Promise((res) => {
  resolveHydrationValue = res;
});

const defaultValues = {
  selectedUserId: '',
  selectedDate: '',
  selectedProject: '',
};

export const useGlobalValues = createSelectors(
  create()(
    // This is a middleware that will auto-persist our changes in the store to the local storage. So anything that is within the store we will save into LocalStorage automagically.If there are any fields in this store that you don't want here you can customize the `partialize` callback further down
    persist(
      (set, get) => ({
        hasHydrated,
        ...defaultValues,
        actions: {
          changeselectedUserId(id) {
            set({ selectedUserId: id });
          },
          changeselectedDate(date) {
            set({ selectedDate: date });
          },
          changeselectedProject(project) {
            set({ selectedProject: project });
          },
          hydrate() {
            resolveHydrationValue(true);
          },
          clear() {
            set({ ...defaultValues });
          },
        },
      }),
      {
        name: 'global-values',
        onRehydrateStorage: () => (state) => {
          if (!state) {
            return;
          }
          // we're going to store this store in local storage so we must make sure that hydration succeeds
          state.actions.hydrate();
        },
        partialize(state) {
          const { actions: _, ...rest } = state;
          return rest;
        },
      }
    )
  )
);
