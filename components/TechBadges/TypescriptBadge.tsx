import type { FC } from "react";
import TechBadge from "./TechBadge";

interface IProps {
	key: string | number;
}

const TypescriptBadge: FC<IProps> = ({ key }) => {
	return (
		<TechBadge key={key} colorScheme="blue">
			Typescript
		</TechBadge>
	);
};

export default TypescriptBadge;
