import type { FC } from "react";
import { useRouter } from "next/router";
import { motion, type Transition } from "framer-motion";

interface IProps {
	pathName: string;
}

const animation = {
	background: [
		"linear-gradient(90deg, #fff200 30%, #07ff00 100%)",
		"linear-gradient(90deg, #07ff00 30%, #fff200 70%)",
	],
};

const transition: Transition = {
	repeat: Infinity,
	repeatType: "reverse",
	duration: 1,
};

const CurrentPageIndicator: FC<IProps> = ({ pathName }) => {
	const router = useRouter();

	return router.pathname === pathName ? (
		<motion.div
			animate={animation}
			transition={transition}
			className="h-[2px] rounded-full"
		/>
	) : null;
};

export default CurrentPageIndicator;
