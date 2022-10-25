import type { FC, ReactElement, ReactNode } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from "@chakra-ui/react";

interface IProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	tags?: ReactElement[];
	children: ReactNode;
}

const ProjectDetailModal: FC<IProps> = ({
	isOpen,
	onClose,
	title,
	children,
	tags,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
			<ModalOverlay />
			<ModalContent className="font-openSans">
				<ModalHeader className="font-robotoSlab flex md:flex-row flex-col items-center">
					<h2 className="md:mr-1">{title}</h2>
					<section className="font-robotoCondensed flex flex-wrap justify-center lowercase text-sm">
						{tags}
					</section>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{children}</ModalBody>

				<ModalFooter>
					<Button colorScheme="green" onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ProjectDetailModal;
