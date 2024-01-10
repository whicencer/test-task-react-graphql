import { RepositorySchema } from "@/entities/Repository/model/types/RepositorySchema";
import { CommentsSchema } from "@/features/AddCommentToIssue/model/types/commentsSchema";
import { SearchRepositorySchema } from "@/features/SearchRepository/model/types/searchRepositorySchema";

export interface StateSchema {
	repository: RepositorySchema;
	comments: CommentsSchema;
	searchRepository: SearchRepositorySchema;
}