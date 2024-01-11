import { Issue } from "../../model/types/IssueSchema";
import cls from "./IssueCard.module.scss";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { AddCommentForm } from "@/features/AddCommentToIssue";

interface IssueCardProps {
	issue: Issue
}

export const IssueCard = ({issue}: IssueCardProps) => {
	const { id, title, comments, state, body } = issue.node;
	const [showBody, setShowBody] = useState(false);

	return (
		<div className={cls.IssueCard}>
			<div>
				<h2>{title}</h2>
				<span>Comments: {comments.totalCount} | Status: {state}</span>
			</div>
			{
				showBody && (
					<div>
						<ReactMarkdown className={cls.markdown} skipHtml>{body}</ReactMarkdown>
						<hr />
						<h3>Add a comment</h3>
						<AddCommentForm issueId={id} />
					</div>
				)
			}
			<span
				className={cls.showMore}
				onClick={() => setShowBody(prev => !prev)}>Show {showBody ? "less" : "more"}...</span>
		</div>
	);
}
