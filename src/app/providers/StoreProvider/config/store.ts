import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema} from "./stateSchema";
import { repositoryReducer } from "@/entities/Repository";
import { searchRepositoryReducer } from "@/features/SearchRepository/model/slice/searchRepositorySlice";

export function createReduxStore(initialState?: StateSchema) {
	const reducers: ReducersMapObject<StateSchema> = {
		repository: repositoryReducer,
		searchRepository: searchRepositoryReducer
	};

	return configureStore<StateSchema>({
		reducer: reducers,
		preloadedState: initialState
	});
}

const store = createReduxStore();
export type AppDispatch = typeof store.dispatch;