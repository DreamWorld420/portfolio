import type { FC, ReactNode } from "react";
import { Children } from "react";

interface IProps {
	children: ReactNode;
}

const Navigation: FC<IProps> = ({ children }) => {
	return <nav className="mt-4">{children}</nav>;
};

export default Navigation;
