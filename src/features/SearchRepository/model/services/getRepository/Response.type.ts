interface Owner {
  login: string;
}

interface Stargazers {
  totalCount: number;
}

interface Issues {
  totalCount: number;
}

interface RepositoryData {
  name: string;
  description: string;
  owner: Owner;
  stargazers: Stargazers;
  issues: Issues;
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
