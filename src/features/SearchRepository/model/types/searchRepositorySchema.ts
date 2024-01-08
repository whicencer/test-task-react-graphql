export interface SearchRepositorySchema {
	repositoryName: string,
	repositoryOwner: string;
	isLoading?: boolean;
	error?: string;
}