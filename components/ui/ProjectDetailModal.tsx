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
}

const ProjectDetailModal: FC<IProps> = ({
	isOpen,
	onClose,
	modalTitle,
	modalBody,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent className="font-openSans">
				<ModalHeader className="font-robotoSlab">
					{modalTitle}
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
