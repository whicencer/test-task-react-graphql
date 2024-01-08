import { RepositoryCard } from "@/entities/Repository";
import cls from "./SearchResults.module.scss";
import { useSelector } from "react-redux";
import { getRepositoryState } from "@/entities/Repository/model/selectors/getRepositoryState";
import { useEffect, useState } from "react";
import { Alert } from "antd";
import { getSearchRepositoryState } from "../../model/selectors/getSearchRepositoryState";

export const SearchResults = () => {
	const [errorVisible, setErrorVisible] = useState(false);
	const { repositoryData } = useSelector(getRepositoryState);
	const { error } = useSelector(getSearchRepositoryState);

	useEffect(() => {
		if (error) {
			setErrorVisible(true);
		}
	}, [error]);

	return (
		<div className={cls.SearchResults}>
			{
				repositoryData && (
					<RepositoryCard repository={{
						owner: repositoryData.owner,
						name: repositoryData.name,
						description: repositoryData.description || "No description.",
						starsCount: repositoryData.starsCount,
						issuesCount: repositoryData.issuesCount
					}} />
				)
			}
			{
				errorVisible && (
					<Alert
						className={cls.Alert}
						message={error}
						type="error"
						afterClose={() => setErrorVisible(false)}
						closable
						showIcon
					/>
				)
			}
		</div>
	);
}
