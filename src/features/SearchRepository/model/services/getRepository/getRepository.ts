import { repositoryActions } from "@/entities/Repository";
import { Repository } from "@/entities/Repository/model/types/RepositorySchema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Response } from "./Response.type";
import { formatNumber } from "@/helpers/formatNumber";
import { GRAPHQL_QUERY } from "./graphqlQuery";

export interface GetRepositoryProps {
	repositoryName: string;
	repositoryOwner: string;
}

export const getRepository = createAsyncThunk<Repository, GetRepositoryProps, { rejectValue: string }>(
	"searchRepository/getRepository",
	async ({repositoryName, repositoryOwner}, thunkApi) => {
		try {
			const response = await axios.post<Response>(
				"https://api.github.com/graphql",
				{ query: GRAPHQL_QUERY, variables: { owner: repositoryOwner, name: repositoryName } },
				{ headers: { "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}` } }
			);
			
			if (!response.data || response.data.errors) {
				const error = response?.data?.errors?.[0];
				throw new Error(`${error?.type || "Error"}: ${error?.message}`);
			}

			const { name, owner, description, issues, stargazers } = response.data.data.repository;
			const repository: Repository = {
				name,
				owner: owner.login,
				description,
				issues: issues,
				starsCount: formatNumber(stargazers.totalCount)
			};

			thunkApi.dispatch(repositoryActions.setRepository(repository));

			return repository;
		} catch (error: unknown) {
			return thunkApi.rejectWithValue(error instanceof Error ? error.message : "An error occurred");
		}
	}
);
