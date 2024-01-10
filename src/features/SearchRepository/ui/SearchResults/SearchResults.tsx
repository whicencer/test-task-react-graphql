import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";
import { RepositoryCard } from "@/entities/Repository";
import cls from "./SearchResults.module.scss";
import { getRepositoryState } from "@/entities/Repository/model/selectors/getRepositoryState";
import { getSearchRepositoryState } from "../../model/selectors/getSearchRepositoryState";
import { Modal } from "@/shared/ui/Modal/Modal";
import { IssuesList } from "../../../../entities/Issue";
import { SearchError } from "../SearchError/SearchError";

export const SearchResults = () => {
	const [errorVisible, setErrorVisible] = useState(false);
	const { repositoryData } = useSelector(getRepositoryState);
	const { error, isLoading } = useSelector(getSearchRepositoryState);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		if (error) {
			setErrorVisible(true);
		}
	}, [error]);

	return (
		<div className={cls.SearchResults}>
			{/* Это всё, в принципе, можно было бы вынести в отдельные компоненты */}
			{
				repositoryData ? (
					<>
						<Skeleton loading={isLoading} active avatar paragraph>
							<RepositoryCard repository={{
								owner: repositoryData.owner,
								name: repositoryData.name,
								description: repositoryData.description || "No description.",
								starsCount: repositoryData.starsCount,
								issues: repositoryData.issues
							}} onClick={() => setModalOpen(true)} />
						</Skeleton>
						<Modal title={`${repositoryData.owner}/${repositoryData.name} Issues`} isOpen={modalOpen} onClose={() => setModalOpen(false)}>
							<IssuesList />
						</Modal>
					</>
				) : <h2>No repository.</h2>
			}

			<SearchError errorMessage={error || "An error occured"} errorVisible={errorVisible} afterClose={() => setErrorVisible(false)} />
		</div>
	);
}
