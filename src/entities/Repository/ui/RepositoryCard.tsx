import { Card, Flex } from "antd";
import GhIcon from "@/assets/images/github.svg";
import StarIcon from "@/assets/images/star.svg";
import IssueIcon from "@/assets/images/issue.svg";
import cls from "./RepositoryCard.module.scss";
import { RepositorySchema } from "../model/types/RepositorySchema";

interface RepositoryCardProps {
	repository: RepositorySchema;
}

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
	return (
		<Card className={cls.RepositoryCard}>
			<Flex align="center" className={cls.RepositoryCardHeader}>
				<img src={GhIcon} />
				<h2>{repository.owner}/{repository.name}</h2>
			</Flex>
			<p>{repository.description}</p>
			<Flex className={cls.RepositoryCardInfo}>
				<Flex>
					<img src={StarIcon} alt="star" />
					<h3>{repository.starsCount}</h3>
				</Flex>
				<Flex style={{ marginTop: 2 }}>
					<img src={IssueIcon} alt="issue" />
					<h3 style={{ marginBottom: 2 }}>1.2k</h3>
				</Flex>
			</Flex>
		</Card>
	);
}