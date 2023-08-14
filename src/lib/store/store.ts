import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";
import {
  useDispatch as useRRDispatch,
  useStore as useRRStore,
} from "react-redux";

export const store = configureStore({
  reducer: {
    postsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useDispatch = useRRDispatch<AppDispatch>;
export const useStore = useRRStore<AppDispatch>;
