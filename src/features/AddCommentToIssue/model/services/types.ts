export interface Response {
	data:   Data;
	errors: Error[];
}

export interface Data {
	addComment: AddComment;
}

export interface AddComment {
	commentEdge: CommentEdge;
}

export interface CommentEdge {
	node: Node;
}

export interface Node {
	id:        string;
	body:      string;
	createdAt: Date;
	updatedAt: Date;
	author:    Author;
}

export interface Author {
	login: string;
}

export interface Error {
	message: string;
}