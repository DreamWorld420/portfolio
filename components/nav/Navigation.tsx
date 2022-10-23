import type { FC, ReactNode } from "react";
import { Children } from "react";

interface IProps {
	children: ReactNode;
}

const Navigation: FC<IProps> = ({ children }) => {
	return <nav className="space-x-4 mt-4 flex flex-row">{children}</nav>;
};

export default Navigation;
