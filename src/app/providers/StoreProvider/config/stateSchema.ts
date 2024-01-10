import { RepositorySchema } from "@/entities/Repository/model/types/RepositorySchema";
import { CommentsSchema } from "@/features/AddCommentToIssue/model/types/commentsSchema";
import { SearchRepositorySchema } from "@/features/SearchRepository/model/types/SearchRepositorySchema";

export interface StateSchema {
	repository: RepositorySchema;
	searchRepository: SearchRepositorySchema;
	comments: CommentsSchema
}