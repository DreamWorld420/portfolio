import type { FC, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import CurrentPageIndicator from "./CurrentPageIndicator";

interface IProps {
	children: ReactNode;
}

const NavLink: FC<IProps & LinkProps> = ({ children, ...props }) => {
	return (
		<div>
			<Link {...props}>{children}</Link>
			<CurrentPageIndicator pathName={props.href.toString()} />
		</div>
	);
};

export default NavLink;
