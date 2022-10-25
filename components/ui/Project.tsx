import type { FC, ReactNode, ReactElement } from "react";
import { useDisclosure } from "@chakra-ui/react";
import ProjectDetailCard from "./ProjectDetailCard";
import ProjectDetailModal from "./ProjectDetailModal";
import ProjectModalBody from "./ProjectModalBody";

interface IProps {
	summary: ReactNode;
	href: string;
	title: string;
	tags?: ReactElement[];
	children: ReactNode;
	position: string;
	duration: string;
}

const Project: FC<IProps> = ({
	summary,
	href,
	title,
	tags,
	children,
	position,
	duration,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<ProjectDetailCard title={title} href={href} onOpen={onOpen}>
				{summary}
			</ProjectDetailCard>
			<ProjectDetailModal
				title={title}
				isOpen={isOpen}
				onClose={onClose}
				tags={tags}
			>
				<ProjectModalBody position={position} duration={duration}>
					{children}
				</ProjectModalBody>
			</ProjectDetailModal>
		</>
	);
};

export default Project;
