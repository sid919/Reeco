import { createSlice } from "@reduxjs/toolkit";
import { ORDER } from "../utils";
const infoSlice = createSlice({
  name: "info",
  initialState: [],
  reducers: {
    setInfo(state, action) {
      console.log("action:::", action.payload);
      state.data = action.payload;
    },
  },
});

export const { setInfo } = infoSlice.actions;
export default infoSlice.reducer;
