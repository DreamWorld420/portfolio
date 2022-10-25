import type { FC } from "react";
import { Badge, BadgeProps } from "@chakra-ui/react";

const TechBadge: FC<BadgeProps> = ({ children, ...props }) => {
	return (
		<Badge {...props} className="m-1">
			{children}
		</Badge>
	);
};

export default TechBadge;
