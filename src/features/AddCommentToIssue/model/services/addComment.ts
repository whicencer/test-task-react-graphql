import { createAsyncThunk } from "@reduxjs/toolkit";
import { GRAPHQL_QUERY } from "./graphqlQuery";
import { Response } from "./types";
import { executeGraphQLQuery } from "@/helpers/executeGraphQLQuery";

interface AddCommentProps {
	issueId: string;
	commentBody: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addComment = createAsyncThunk<Response, AddCommentProps, { rejectValue: string }>(
	"comments/addComment",
	async ({issueId, commentBody}, thunkApi) => {
		try {
			const response = await executeGraphQLQuery<Response>({
				query: GRAPHQL_QUERY,
				variables: { subjectId: issueId, body: commentBody }
			});
			
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
