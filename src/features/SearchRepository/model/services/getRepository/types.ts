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

interface Error {
  type: string;
  message: string;
}

export interface Response {
  data: {
    repository: RepositoryData;
  };
  errors?: Error[];
}
