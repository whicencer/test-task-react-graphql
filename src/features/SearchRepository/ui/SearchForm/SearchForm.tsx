import { ChangeEvent, useState } from "react";
import { Flex } from "antd";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { getRepository } from "../../model/services/getRepository/getRepository";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/providers/StoreProvider";

export const SearchForm = () => {
	const [repo, setRepo] = useState("");
	const dispatch = useDispatch<AppDispatch>();

	const handleClick = () => {
		if (!repo.length) {
			return;
		} else {
			const [repositoryOwner, repositoryName] = repo.split('/');
			dispatch(getRepository({ repositoryOwner, repositoryName }));
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setRepo(event.target.value);
	}

	return (
		<>
			<Flex align="center">
				<Input
					value={repo}
					onChange={handleChange}
					placeholder="Enter a Github repository name"
				/>
				<Button
					style={{ borderRadius: 100, minHeight: 70, minWidth: 70 }}
					type="primary"
					onClick={handleClick}>🔍</Button>
			</Flex>
		</>
	);
}