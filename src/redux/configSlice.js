import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
  name: "config",
  initialState: {
    under_construction: null,
    pre_checking: true,
  },
  reducers: {
    setPreChecking: (state, action) => {
      state.pre_checking = action.payload.pre_checking;
    },
    setUnderConstruction: (state, action) => {
      state.under_construction = action.payload.under_construction;
    },
  },
  extraReducers: {},
});

export const { setPreChecking, setUnderConstruction } = configSlice.actions;
export default configSlice.reducer;
