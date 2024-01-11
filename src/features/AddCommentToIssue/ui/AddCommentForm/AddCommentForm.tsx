import { Alert, Button, Input } from "antd"
import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux";
import { addComment } from "../../model/services/addComment";
import { useSelector } from "react-redux";
import { getCommentsState } from "../../model/selectors/getCommentsState";
import { Status } from "../../model/types/commentsSchema";
import { AppDispatch } from "@/app/providers/StoreProvider";

interface AddCommentFormProps {
	issueId: string;
}

export const AddCommentForm = ({ issueId }: AddCommentFormProps) => {
	const [commentValue, setCommentValue] = useState("");
	const { error, status } = useSelector(getCommentsState);
	const dispatch = useDispatch<AppDispatch>();

	const changeCommentValue = (e: ChangeEvent<HTMLInputElement>) => {
		setCommentValue(e.target.value);
	}

	const handleClick = () => {
		dispatch(addComment({ commentBody: commentValue, issueId }));
	}

	return (
		<>
			<div>
				<Input
					value={commentValue}
					onChange={changeCommentValue}
					placeholder="Leave comment"
					type="text"
				/>
				<Button onClick={handleClick} disabled={!commentValue}>Comment</Button>
			</div>
			{
				status === Status.FAILURE ? (
					<Alert type="error" message={error} />
				)
				: status === Status.SUCCESS && (
					<Alert type="success" message="Comment has been added!" />
				)
			}
		</>
	)
}
