import type { FC } from "react";
import SocialButton from "./SocialButton";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const SocialButtonGroup: FC = () => {
	return (
		<div className="flex flex-row space-x-2">
			<SocialButton
				aria-label="github"
				icon={<FiGithub />}
				color="white"
				colorScheme="gray"
			/>
			<SocialButton
				aria-label="linkedin"
				colorScheme="linkedin"
				icon={<FiLinkedin />}
			/>
		</div>
	);
};

export default SocialButtonGroup;
