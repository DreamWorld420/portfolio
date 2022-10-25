import type { FC } from "react";
import TechBadge from "./TechBadge";

interface IProps {
	key: string | number;
}

const ReactQueryBadge: FC<IProps> = ({ key }) => {
	return (
		<TechBadge key={key} colorScheme="red">
			React-query
		</TechBadge>
	);
};

export default ReactQueryBadge;
