export interface IssueSchema {
	node: Node;
}

export interface Node {
	title:     string;
	body:      string;
	createdAt: Date;
	updatedAt: Date;
	state:     string;
	comments:  Comments;
}

export interface Comments {
	totalCount: number;
}