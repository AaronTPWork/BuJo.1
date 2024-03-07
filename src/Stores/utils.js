/**
 * Utility function to create selectors on the wrapped zustand store.
 * @example
 * ```typescript
 * //instead of
 * const someStoreField = useStore( s => s.someStoreField )
 * // we can do
 * const someStoreField = useStore.use.someStoreField()
 * ```
 * @url https://github.com/pmndrs/zustand/blob/main/docs/guides/auto-generating-selectors.md
 */
export const createSelectors = (_store) => {
  const store = _store;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    store.use[k] = () => store((s) => s[k]);
  }

  return store;
};
