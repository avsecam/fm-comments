import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

type State = {
  currentUser: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  comments: CommentType[];
};

const slice = createSlice({
  name: "app",
  initialState: data,
  reducers: {
    addComment: (state, action: PayloadAction<CommentType>) => {
      console.log(state.comments.length - 1);
      state.comments.push({
        ...action.payload,
        replies: [],
      });
    },
  },
});

export const { addComment } = slice.actions;
export default slice.reducer;
