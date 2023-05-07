import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { staticPageGenerationTimeout } from "../../next.config";


export const userSlice = createSlice({
  name: "users",
  initialState: {
    uid: "",
    age: "",
    username: "",
    number: 1,
    status: ""
  },
  reducers: {
    signin: (state, action) => {
      state.uid = action.payload.uid;
      state.username = action.payload.username;
      // state.username = action.username;
    },
    increment: (state) => {
      state.number += 1;
    },
    deatiluser: (state, action) => {
      state.uid = action.payload.uid
      state.age = action.payload.age
      state.username = action.payload.username
    }
  },
  extraReducers: (builder) => {
    builder
    // increment
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.number += action.payload
      })
      .addCase(decrementAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(decrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.number -= action.payload
      })
  },
});

export const incrementAsync = createAsyncThunk(
  'counter/increment',
  async (state) => {
    console.log("#### reduxtThunk ####")
    console.log(state)
    await new Promise((resolve) => setTimeout(resolve, 5000))
    // const response = await fetchCount(amount)
    // The value we return becomes the `fulfilled` action payload
    return 10 
  }
)

export const decrementAsync = createAsyncThunk(
  'counter/decrement',
  async (state) => {
    console.log("#### reduxtThunk ####")
    console.log(state)
    await new Promise((resolve) => setTimeout(resolve, 5000))
    // const response = await fetchCount(amount)
    // The value we return becomes the `fulfilled` action payload
    return 10 
  }
)

export const selectUser = (state) => state.users;

export const { signin, increment, deatiluser } = userSlice.actions;
export default userSlice.reducer;
