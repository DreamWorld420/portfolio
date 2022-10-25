import type { FC } from "react";
import TechBadge from "./TechBadge";

interface IProps {
	key: string | number;
}

const ReactTableBadge: FC<IProps> = ({ key }) => {
	return (
		<TechBadge key={key} colorScheme="purple">
			React-table
		</TechBadge>
	);
};

export default ReactTableBadge;
