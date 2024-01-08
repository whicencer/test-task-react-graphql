import { RepositorySchema } from "@/entities/Repository/model/types/RepositorySchema";
import { SearchRepositorySchema } from "@/features/SearchRepository/model/types/SearchRepositorySchema";

export interface StateSchema {
	repository: RepositorySchema;
	searchRepository: SearchRepositorySchema;
}