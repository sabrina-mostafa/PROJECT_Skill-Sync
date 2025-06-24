import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  skills: [],
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addSkill: {
      reducer: (state, action) => {
        state.skills.push(action.payload);
      },
      prepare: (title, category) => ({
        payload: {
          id: nanoid(),
          title,
          category,
          rating: 0,
        },
      }),
    },
    deleteSkill: (state, action) => {
      state.skills = state.skills.filter(skill => skill.id !== action.payload);
    },
    updateSkillRating: (state, action) => {
      const { id, rating } = action.payload;
      const skill = state.skills.find(skill => skill.id === id);
      if (skill) {
        skill.rating = rating;
      }
    },
  },
});

export const { addSkill, deleteSkill, updateSkillRating } = skillsSlice.actions;
export default skillsSlice.reducer;
