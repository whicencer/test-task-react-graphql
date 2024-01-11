import { Button } from "antd";
import { useState } from "react";
import { SESSION_STORAGE_KEY } from "../SESSION_STORAGE_KEY";

export const ChangeToken = () => {
	const [token, setToken] = useState("");

	const handleClick = () => {
		sessionStorage.setItem(SESSION_STORAGE_KEY, token);
	};

	return (
		<div style={{ marginTop: 25 }}>
			<input onChange={(e) => setToken(e.target.value)} placeholder="Your GitHub token" type="text" style={{
				width: 300,
				padding: 7,
				fontSize: 15
			}} />
			<Button onClick={handleClick}>Set</Button>
		</div>
	);
}