export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('skillSyncState');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load state:", e);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('skillSyncState', serializedState);
  } catch (e) {
    console.warn("Could not save state:", e);
  }
};
