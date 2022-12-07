import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TthemeName = "default" | "main";

interface Itheme {
  theme: TthemeName;
}

const initialState: Itheme = {
  theme: "default",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<TthemeName>) {
      state.theme = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;
