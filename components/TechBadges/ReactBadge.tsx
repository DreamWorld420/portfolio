import type { FC } from "react";
import TechBadge from "./TechBadge";

interface IProps {
	key: string | number;
}

const ReactBadge: FC<IProps> = ({ key }) => {
	return (
		<TechBadge key={key} colorScheme="blue">
			React
		</TechBadge>
	);
};

export default ReactBadge;
