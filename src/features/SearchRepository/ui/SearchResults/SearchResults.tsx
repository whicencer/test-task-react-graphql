import { RepositoryCard } from "@/entities/Repository";
import cls from "./SearchResults.module.scss";
import { useSelector } from "react-redux";
import { getRepositoryState } from "@/entities/Repository/model/selectors/getRepositoryState";
import { useEffect, useState } from "react";
import { Alert } from "antd";
import { getSearchRepositoryState } from "../../model/selectors/getSearchRepositoryState";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Issues } from "../Issues/Issues";

export const SearchResults = () => {
	const [errorVisible, setErrorVisible] = useState(false);
	const { repositoryData } = useSelector(getRepositoryState);
	const { error } = useSelector(getSearchRepositoryState);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		if (error) {
			setErrorVisible(true);
		}
	}, [error]);

	return (
		<div className={cls.SearchResults}>
			{
				repositoryData ? (
					<>
						<RepositoryCard repository={{
							owner: repositoryData.owner,
							name: repositoryData.name,
							description: repositoryData.description || "No description.",
							starsCount: repositoryData.starsCount,
							issues: repositoryData.issues
						}} onClick={() => setModalOpen(true)} />
						<Modal title={`${repositoryData.owner}/${repositoryData.name} Issues`} isOpen={modalOpen} onClose={() => setModalOpen(false)}>
							<Issues />
						</Modal>
					</>
				) : <h2>No repository.</h2>
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
