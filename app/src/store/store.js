import userSlice from "../redux/userslice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: { users: userSlice },
});
