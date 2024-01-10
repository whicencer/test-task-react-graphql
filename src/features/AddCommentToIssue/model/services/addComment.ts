import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GRAPHQL_QUERY } from "./graphqlQuery";
import { Response } from "./types";

interface AddCommentProps {
	issueId: string;
	commentBody: string;
}

interface AddCommentResponse {
	data: Response;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addComment = createAsyncThunk<Response, AddCommentProps, { rejectValue: string }>(
	"comment/addComment",
	async ({issueId, commentBody}, thunkApi) => {
		try {
			const response: AddCommentResponse = await axios.post<Response>(
				"https://api.github.com/graphql",
				{ query: GRAPHQL_QUERY, variables: { subjectId: issueId, body: commentBody } },
				{ headers: { "Authorization": `Bearer ${import.meta.env.VITE_GITHUB_API_KEY}` } }
			);
			
			if (!response.data || response.data.errors) {
				const error = response?.data?.errors?.[0];
				throw new Error(error.message);
			}
			
			return response.data;
		} catch (error: unknown) {
			const errorMessage = error instanceof Error ? error.message : "An error occurred";

			return thunkApi.rejectWithValue(errorMessage);
		}
	}
);
