import type { FC } from "react";
import { Button } from "@chakra-ui/react";

const DownloadResume: FC = () => {
	return (
		<Button colorScheme="green">
			<a
				href="/resume.pdf"
				download="resume.pdf"
				className="font-openSans"
			>
				Download Resume
			</a>
		</Button>
	);
};

export default DownloadResume;
