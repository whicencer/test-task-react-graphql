export const GRAPHQL_QUERY = `
mutation ($subjectId: ID!, $body: String!) {
  addComment(input: {
    subjectId: $subjectId,
    body: $body
  }) {
    commentEdge {
      node {
        id
        body
        createdAt
        updatedAt
        author {
          login
        }
      }
    }
  }
}
`;