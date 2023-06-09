import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetArticles } from "../../api/articles";

export const getAllArticles = createAsyncThunk("articles/getAll", async () => {
  return apiGetArticles();
});

export interface IArticlesState {
  articles: any[];
}

const initialState: IArticlesState = {
  articles: [],
};

export const articlesSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
      })
      .addCase(getAllArticles.rejected, (state, action) => {
        state.articles = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = articlesSlice.actions;

export default articlesSlice.reducer;
