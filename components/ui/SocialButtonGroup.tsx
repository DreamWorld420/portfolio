import type { FC } from "react";
import SocialButton from "./SocialButton";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const SocialButtonGroup: FC = () => {
	return (
		<div className="flex flex-row space-x-2">
			<a
				href="https://github.com/DreamWorld420/"
				target="_blank"
				rel="noreferrer"
			>
				<SocialButton
					aria-label="github"
					icon={<FiGithub />}
					color="white"
					colorScheme="gray"
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/Kasra-Bozorgmehr/"
				target="_blank"
				rel="noreferrer"
			>
				<SocialButton
					aria-label="linkedin"
					colorScheme="linkedin"
					icon={<FiLinkedin />}
				/>
			</a>
		</div>
	);
};

export default SocialButtonGroup;
