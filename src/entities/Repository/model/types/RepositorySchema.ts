export interface Repository{
	owner: string;
	name: string;
	description: string;
	starsCount: string;
	issuesCount: string;
}

export interface RepositorySchema {
	repositoryData: Repository
}