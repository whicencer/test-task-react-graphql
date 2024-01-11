export const GRAPHQL_QUERY = `
query GetRepository($owner: String!, $name: String!) {
	repository(owner: $owner, name: $name) {
		name
		description
		owner {
			login
		}
		stargazers {
			totalCount
		}
		issues(last: 25) {
      edges {
        node {
          id
          title
          body
          createdAt
          updatedAt
          state
          comments {
            totalCount
          }
        }
      }
      totalCount
    }
	}
}
`;