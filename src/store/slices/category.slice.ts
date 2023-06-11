import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetCategories } from "../../api/categories";

export const getAllCategories = createAsyncThunk("categories/getAll", async () => {
  return apiGetCategories();
});

export interface ICategoriesState {
  categories: string[];
}

const initialState: ICategoriesState = {
  categories: [],
};

export const articlesSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.categories = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = articlesSlice.actions;

export default articlesSlice.reducer;
