import axios from "axios";
import { SESSION_STORAGE_KEY } from "@/features/ChangeToken/SESSION_STORAGE_KEY";

interface ExecuteGraphQLQueryArgs {
	query: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	variables: any;
}

export const executeGraphQLQuery = async<R>({ query, variables }: ExecuteGraphQLQueryArgs) => {
	const token = sessionStorage.getItem(SESSION_STORAGE_KEY);

	return await axios.post<R>(
		"https://api.github.com/graphql",
		{ query, variables },
		{ headers: { "Authorization": `Bearer ${token || import.meta.env.VITE_GITHUB_API_KEY}` } }
	);
};