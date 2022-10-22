import type { FC, ReactNode } from "react";
import { Container, ContainerProps } from "@chakra-ui/react";

interface IProps {
	children: ReactNode;
}

const PageLayout: FC<IProps & ContainerProps> = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};

export default PageLayout;
