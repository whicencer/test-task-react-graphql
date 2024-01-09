import { StateSchema } from "@/app/providers/StoreProvider";

export const getRepositoryIssues = (state: StateSchema) => state.repository.repositoryData.issues;