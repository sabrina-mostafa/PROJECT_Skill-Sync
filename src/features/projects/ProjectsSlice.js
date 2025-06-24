import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: {
      reducer: (state, action) => {
        state.projects.push(action.payload);
      },
      prepare: (title, description, skills, liveLink = '', date = '') => ({
        payload: {
          id: nanoid(),
          title,
          description,
          skills,     // array of skill IDs
          liveLink,   // optional project URL
          date        // optional project date (e.g., "2025-06-06")
        },
      }),
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(p => p.id !== action.payload);
    },
  },
});

export const { addProject, deleteProject } = projectsSlice.actions;
export default projectsSlice.reducer;
