import { IssueSchema } from "@/entities/Repository/model/types/IssueSchema";

interface Owner {
  login: string;
}

interface Stargazers {
  totalCount: number;
}

interface RepositoryData {
  name: string;
  description: string;
  owner: Owner;
  stargazers: Stargazers;
  issues: IssueSchema;
}

export interface Response {
  data: {
    repository: RepositoryData;
  };
  errors?: {
    type: string;
    message: string;
  }[];
}
