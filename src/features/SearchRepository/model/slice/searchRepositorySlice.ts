import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchRepositorySchema } from "../types/searchRepositorySchema";
import { getRepository } from "../services/getRepository/getRepository";

const initialState: SearchRepositorySchema = {
	repoName: "",
};

const searchRepositorySlice = createSlice({
	name: "searchRepository",
	initialState,
	reducers: {
		setRepoName(state, action: PayloadAction<string>) {
			state.repoName = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(getRepository.pending, state => {
				state.isLoading = true;
			})
			.addCase(getRepository.fulfilled, state => {
				state.isLoading = false;
			})
			.addCase(getRepository.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
	}
});

export const { actions: searchRepositoryActions } = searchRepositorySlice;
export const { reducer: searchRepositoryReducer } = searchRepositorySlice;
