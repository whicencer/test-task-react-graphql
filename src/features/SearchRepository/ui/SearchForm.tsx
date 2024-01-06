import { useState } from "react";
import { Alert, Flex } from "antd";
import { Button } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import cls from "./SearchForm.module.scss"

export const SearchForm = () => {
	const [repo, setRepo] = useState("");
	const [errorVisible, setErrorVisible] = useState(false);

	const handleClick = () => {
		if (!repo.length) {
			setErrorVisible(true);
		}
	};

	return (
		<>
			<Flex align="center">
				<Input
					value={repo}
					onChange={(event) => setRepo(event.target.value)}
					placeholder="Enter a Github repository name or link"
				/>
				<Button
					style={{ borderRadius: 100, minHeight: 70, minWidth: 70 }}
					type="primary"
					onClick={handleClick}>🔍</Button>
			</Flex>
			{
				errorVisible && (
					<Alert
						className={cls.Alert}
						message="Error: Repository name cannot be empty"
						type="error"
						afterClose={() => setErrorVisible(false)}
						closable
						showIcon
					/>
				)
			}
		</>
	);
}