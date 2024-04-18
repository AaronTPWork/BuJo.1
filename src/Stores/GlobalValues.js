import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createSelectors } from './utils';
import { format } from 'date-fns';

export const todayDate = format(new Date(), 'yyyy-MM-dd');

let resolveHydrationValue;
const hasHydrated = new Promise((res) => {
  resolveHydrationValue = res;
});

const defaultValues = {
  selectedUserId: '',
  selectedDate: todayDate,
  selectedProject: '',
  selectedProjectName: '',
  showSearch: false,
  currentSearch: '',
  currentFilter: '',
  selectedNote: {},
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
          changeselectedProjectName(project) {
            set({ selectedProjectName: project });
          },
          hydrate() {
            resolveHydrationValue(true);
          },
          clear() {
            set({ ...defaultValues });
          },
          showSearch() {
            set({ showSearch: true });
          },
          hideSearch() {
            set({ showSearch: false });
          },
          setCurrentSearch(search) {
            set({ currentSearch: search });
          },
          setCurrentFilter(filter) {
            set({ currentFilter: filter });
          },
          setSelectedNote(note) {
            set({ selectedNote: note });
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
