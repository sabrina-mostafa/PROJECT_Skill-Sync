import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  title: '',
  email: '',
  github: '',
  linkedin: '',
};

const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;