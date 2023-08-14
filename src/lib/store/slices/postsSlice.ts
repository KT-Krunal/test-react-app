import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

export type Post = {
  id?: number;
  title: string;
  content: string;
  kudosCount: number;
};
export type PostsSlice = {
  posts: Post[];
};

const initialState: PostsSlice = {
  posts: [],
};

const postsSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {
    addKudosToPost: (state, action: PayloadAction<Post>) => {
      state.posts[action.payload.id].kudosCount++;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      const newPost: Post = { ...action.payload, id: state.posts.length + 1 };
      console.info(current(state));
      state.posts.push(newPost);
    },
    clearPosts: (state) => {
      state.posts = [];
    },
  },
});

export const { addKudosToPost, addPost, clearPosts } = postsSlice.actions;

// selectors
export const getPosts = (state): Post[] => {
  return [];
}
export default postsSlice.reducer;
