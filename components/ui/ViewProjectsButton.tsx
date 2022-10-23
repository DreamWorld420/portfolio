import type { FC } from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

const ViewProjectsButton: FC = () => {
	return (
		<Link href="/projects">
			<Button colorScheme="green" variant="outline">
				View My Projects
			</Button>
		</Link>
	);
};

export default ViewProjectsButton;
