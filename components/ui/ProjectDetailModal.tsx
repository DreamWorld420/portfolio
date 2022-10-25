import type { FC, ReactElement } from "react";
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
	onOpen: () => void;
	modalTitle: string;
	modalBody: ReactElement;
	tags: ReactElement[];
}

const ProjectDetailModal: FC<IProps> = ({
	isOpen,
	onClose,
	modalTitle,
	modalBody,
	tags,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered size="2xl">
			<ModalOverlay />
			<ModalContent className="font-openSans">
				<ModalHeader className="font-robotoSlab flex items-center">
					<h2 className="mr-2">{modalTitle}</h2>
					<section className="font-robotoCondensed space-x-1 lowercase text-sm">
						{tags}
					</section>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{modalBody}</ModalBody>

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
