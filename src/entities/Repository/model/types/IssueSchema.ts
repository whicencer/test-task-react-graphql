export interface IssueSchema {
	edges: Issue[];
}

export interface Issue {
	node: {
		id:				 string;
		title:     string;
		body:      string;
		createdAt: Date;
		updatedAt: Date;
		state:     string;
		comments:  Comments;
	}
}

export interface Comments {
	totalCount: number;
}