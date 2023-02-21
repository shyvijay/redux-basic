import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const themsSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeColor } = themsSlice.actions;
export default themsSlice.reducer;
