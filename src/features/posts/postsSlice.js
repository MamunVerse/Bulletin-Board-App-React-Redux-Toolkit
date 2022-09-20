import { createSlice, nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
  {
    id: 1,
    title: "This is first title",
    content: "This is first content",
    userId : 1,
    date : sub(new Date(), {minutes : 10}).toISOString(),
  },
  {
    id: 2,
    title: "This is Second title",
    content: "This is Second content",
    userId : 2,
    date : sub(new Date(), {minutes : 5}).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date : new Date().toISOString()
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
