import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slice/usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  }
})

export { store, usersReducer };