import type { FC, ReactNode } from "react";
import { IconButton } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface IProps {
	title: string;
	children: ReactNode;
	href: string;
}

const ProjectDetailCard: FC<IProps> = ({ title, children, href }) => {
	return (
		<section className="bg-slate-700 p-4 shadow-md rounded-lg relative">
			<h2 className="font-robotoSlab font-semibold">{title}</h2>
			<p className="mt-4 font-openSans text-sm">{children}</p>
			<a href={href} target="_blank" rel="noreferrer">
				<IconButton
					className="rounded-tr-lg"
					colorScheme="green"
					variant="solid"
					sx={{
						position: "absolute",
						top: 0,
						right: 0,
					}}
					icon={<ExternalLinkIcon />}
					aria-label="external link"
				/>
			</a>
		</section>
	);
};

export default ProjectDetailCard;
