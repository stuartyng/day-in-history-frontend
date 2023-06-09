import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const readCurrentUser = createAsyncThunk("auth/read_current_user", async (user, thunkAPI) => {
  return null;
});

export interface IAuthState {
  isAuthenticating: boolean;
  authenticated: boolean;
  userId: string;
}

const initialState: IAuthState = {
  isAuthenticating: true,
  authenticated: false,
  userId: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      return {
        ...state,
        isAuthenticating: false,
        authenticated: true,
        userId: action.payload.id,
      };
    },
    signOut: (state, action) => {
      state.isAuthenticating = false;
      state.authenticated = false;
    },
    updateCurrentUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(readCurrentUser.fulfilled, (state, action) => {})
      .addCase(readCurrentUser.rejected, (state, action) => {});
  },
});

// Action creators are generated for each case reducer function
export const {} = authSlice.actions;

export default authSlice.reducer;
