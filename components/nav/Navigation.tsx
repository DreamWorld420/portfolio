import type { FC, ReactNode } from "react";

interface IProps {
	children: ReactNode;
}

const Navigation: FC<IProps> = ({ children }) => {
	return <nav>{children}</nav>;
};

export default Navigation;
