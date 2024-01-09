import { Alert } from "antd";
import cls from "./SearchError.module.scss";

interface SearchErrorProps {
	errorVisible: boolean;
	errorMessage: string;
	afterClose: () => void;
}

export const SearchError = ({ errorVisible, errorMessage, afterClose }: SearchErrorProps) => {
	return (
		errorVisible && (
			<Alert
				className={cls.Alert}
				message={errorMessage}
				type="error"
				afterClose={afterClose}
				closable
				showIcon
			/>
		)
	);
}
