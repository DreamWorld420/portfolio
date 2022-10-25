import type { FC, ReactNode, ReactElement } from "react";
import { IconButton, Button, useDisclosure } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ProjectDetailModal from "./ProjectDetailModal";

interface IProps {
	title: string;
	children: ReactNode;
	href: string;
	onOpen: () => void;
}

const ProjectDetailCard: FC<IProps> = ({ title, children, href, onOpen }) => {
	return (
		<section className="bg-slate-700 p-4 shadow-md rounded-lg relative border border-[#9AE6B4]">
			<h2 className="font-robotoSlab font-semibold">{title}</h2>
			<p className="my-4 font-openSans text-sm">{children}</p>
			<a href={href} target="_blank" rel="noreferrer">
				<IconButton
					colorScheme="green"
					variant="solid"
					sx={{
						position: "absolute",
						top: 0,
						right: 0,
						borderTopLeftRadius: 0,
						borderBottomRightRadius: 0,
					}}
					icon={<ExternalLinkIcon />}
					aria-label="external link"
				/>
			</a>
			<Button
				colorScheme="green"
				variant="solid"
				type="button"
				className="font-openSans"
				sx={{
					fontSize: 14,
				}}
				onClick={onOpen}
			>
				More ...
			</Button>
		</section>
	);
};

export default ProjectDetailCard;
