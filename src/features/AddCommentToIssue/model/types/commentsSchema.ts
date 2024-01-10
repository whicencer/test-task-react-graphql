export enum Status {
	SUCCESS = "success",
	FAILURE = "failure"
}

export interface CommentsSchema {
	status?: Status;
	error?: string;
}