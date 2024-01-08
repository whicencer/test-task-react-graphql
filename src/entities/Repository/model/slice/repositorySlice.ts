import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Repository, RepositorySchema } from "../types/RepositorySchema";

const initialState = {} as RepositorySchema;

const repositorySlice = createSlice({
	name: "repository",
	initialState,
	reducers: {
		setRepository(state, action: PayloadAction<Repository>) {
			state.repositoryData = action.payload;
		}
	}
});

export const {actions: repositoryActions} = repositorySlice;
export const {reducer: repositoryReducer} = repositorySlice;