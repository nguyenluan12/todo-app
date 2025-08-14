import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ValueState {
  text: string;
}

const initialState: ValueState = {
  text: ""
};

const valueSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    }
  }
});

export const { setValue } = valueSlice.actions;
export default valueSlice.reducer;
