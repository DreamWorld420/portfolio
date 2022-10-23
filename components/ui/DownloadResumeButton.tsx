import type { FC } from "react";
import { Button } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

const DownloadResumeButton: FC = () => {
	return (
		<Button colorScheme="green" className="space-x-2">
			<a
				href="/resume.pdf"
				download="resume.pdf"
				className="font-openSans"
			>
				Download Resume
			</a>
			<DownloadIcon />
		</Button>
	);
};

export default DownloadResumeButton;
