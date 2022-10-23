import type { FC, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

interface IProps {
	children: ReactNode;
}

const NavLink: FC<IProps & LinkProps> = ({ children, ...props }) => {
	return <Link {...props}>{children}</Link>;
};

export default NavLink;
