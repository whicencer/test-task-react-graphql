import { getRepositoryIssues } from "@/entities/Repository/model/selectors/getRepositoryIssues";
import { useSelector } from "react-redux";
import { IssueCard } from "../IssueCard/IssueCard";

export const IssuesList = () => {
	const { edges } = useSelector(getRepositoryIssues);

	return (
		<div style={{ marginTop: 30 }}>
			{
				edges.length === 0
					? "No issues."
					: edges.map(issue => {
						return (
							<IssueCard key={issue.node.id} issue={issue} />
						);
					})
			}
		</div>
	);
}
