import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../features/skills/SkillsSlice';
import projectsReducer from '../features/projects/ProjectsSlice';
import profileReducer from '../features/profile/ProfileSlice'
import { loadState, saveState } from '../utils/localStorage';



// Load initial state from localStorage
const persistedState = loadState();

export const store = configureStore({
  reducer: {
    skills: skillsReducer,
    projects: projectsReducer,
    profile: profileReducer,
  },
  preloadedState: persistedState, // use saved state
});

// Save to localStorage whenever state changes
store.subscribe(() => {
  const { skills, projects } = store.getState();
  saveState({ skills, projects });
});