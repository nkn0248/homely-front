import userSlice from "../redux/userslice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { users: userSlice },
});

console.log(store.getState())
export default store

