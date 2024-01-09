import { IssueSchema } from "./IssueSchema";

export interface Repository{
	owner: string;
	name: string;
	description: string;
	starsCount: string;
	issues: IssueSchema;
}

export interface RepositorySchema {
	repositoryData: Repository
}