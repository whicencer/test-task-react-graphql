import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchRepositorySchema } from "../types/SearchRepositorySchema";
import { getRepository } from "../services/getRepository/getRepository";

const initialState: SearchRepositorySchema = {
	repositoryName: "",
	repositoryOwner: ""
};

const searchRepositorySlice = createSlice({
	name: "searchRepository",
	initialState,
	reducers: {
		setName(state, action: PayloadAction<string>) {
			state.repositoryName = action.payload;
		},
		setOwner(state, action: PayloadAction<string>) {
			state.repositoryOwner = action.payload;
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
