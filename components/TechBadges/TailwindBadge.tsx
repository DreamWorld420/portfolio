import type { FC } from "react";
import TechBadge from "./TechBadge";

interface IProps {
	key: string | number;
}

const TailwindBadge: FC<IProps> = ({ key }) => {
	return (
		<TechBadge key={key} colorScheme="teal">
			Tailwindcss
		</TechBadge>
	);
};

export default TailwindBadge;
