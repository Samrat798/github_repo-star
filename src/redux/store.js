import { configureStore } from "@reduxjs/toolkit";
import { listRepos } from "./reducer";

const store = configureStore({
  reducer: listRepos,
});

export default store;
