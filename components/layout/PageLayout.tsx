import type { FC, ReactNode } from "react";
import { Container, ContainerProps } from "@chakra-ui/react";

interface IProps {
	children: ReactNode;
	className: string;
}

const PageLayout: FC<IProps & ContainerProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<Container {...props} className={className}>
			{children}
		</Container>
	);
};

export default PageLayout;
