import { createSlice } from "@reduxjs/toolkit";

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface IPostState {
  posts: IPost[];
  isLoading: boolean;
  currentUser: number | null;
}

const initialState: IPostState = {
  posts: [],
  isLoading: false,
  currentUser: null,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts.push(...action.payload);
    },
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { addPosts, loading, setCurrentUser } = postSlice.actions;

export default postSlice.reducer;
