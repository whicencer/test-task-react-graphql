import { ChangeEvent } from "react";
import { Flex } from "antd";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { getRepository } from "../../model/services/getRepository/getRepository";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/providers/StoreProvider";
import { useSelector } from "react-redux";
import { getSearchRepositoryState } from "../../model/selectors/getSearchRepositoryState";
import { searchRepositoryActions } from "../../model/slice/searchRepositorySlice";

export const SearchForm = () => {
	const { repoName } = useSelector(getSearchRepositoryState);
	const dispatch = useDispatch<AppDispatch>();

	const handleClick = () => {
		const [repositoryOwner, repositoryName] = repoName.split('/');
		dispatch(getRepository({ repositoryOwner, repositoryName }));
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(searchRepositoryActions.setRepoName(event.target.value));
	}

	return (
		<>
			<Flex align="center">
				<Input
					value={repoName}
					onChange={handleChange}
					placeholder="Enter a Github repository name"
				/>
				<Button
					disabled={!repoName}
					style={{ borderRadius: 100, minHeight: 70, minWidth: 70 }}
					type="primary"
					onClick={handleClick}>🔍</Button>
			</Flex>
		</>
	);
}