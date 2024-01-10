import { createSlice } from "@reduxjs/toolkit";
import { addComment } from "../services/addComment";
import { CommentsSchema, Status } from "../types/commentsSchema";

const initialState: CommentSchema = {};

const commentsSlice = createSlice({
	name: "comment",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addComment.fulfilled, state => {
				state.status = Status.SUCCESS;
			})
			.addCase(addComment.rejected, (state, action) => {
				state.error = action.payload;
				state.status = Status.FAILURE;
			})
	}
});

export const { actions: commentsActions } = commentsSlice;
export const { reducer: commentsReducer } = commentsSlice;
