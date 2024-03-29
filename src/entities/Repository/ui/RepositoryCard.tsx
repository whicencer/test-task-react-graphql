import { Card, Flex } from "antd";
import GhIcon from "@/assets/images/github.svg";
import StarIcon from "@/assets/images/star.svg";
import IssueIcon from "@/assets/images/issue.svg";
import cls from "./RepositoryCard.module.scss";
import { Repository } from "../model/types/RepositorySchema";
import { formatNumber } from "@/helpers/formatNumber";

interface RepositoryCardProps {
	repository: Repository;
	onClick?: () => void;
}

export const RepositoryCard = ({ repository, onClick }: RepositoryCardProps) => {
	return (
		<Card className={cls.RepositoryCard} onClick={onClick}>
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
					<h3 style={{ marginBottom: 2 }}>{formatNumber(repository.issues.totalCount)}</h3>
				</Flex>
			</Flex>
		</Card>
	);
}