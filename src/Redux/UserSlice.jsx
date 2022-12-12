import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  "user/getUser",
  async () => {
    const response = await axios.get("https://dummyjson.com/users");
    return response.data;
  }
);


const UserSlice = createSlice({
    name: "user",
    initialState: {
      data: [],
      loading: "idle",
      error: null,
      userId:"",
    },
    reducers: { },
    extraReducers: (builder) => {
      builder.addCase(getUser.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      });
      builder.addCase(getUser.fulfilled, (state, action) => {
        if (state.loading === "pending") {
          state.data = action.payload;
        }
      });
      builder.addCase(getUser.rejected, (state, action) => {
        if (state.loading === "pending") {
          state.loading = "idle";
          state.error = "Error occured";
        }
      });
    },
  });
  export const {logins , logout} = UserSlice.actions
  export default UserSlice.reducer;