import { NextPage } from "next";
import ModalBody from "../components/ui/ModalBody";
import ProjectDetailCard from "../components/ui/ProjectDetailCard";
import { Badge } from "@chakra-ui/react";

const Projects: NextPage = () => {
	return (
		<section className="grid grid-cols-2 gap-4">
			<ProjectDetailCard
				title="Triangle Studio"
				href="https://trianglestudio.org/"
				modalTitle="Triangle Studio"
				modalBody={
					<ModalBody
						position="Front-end developer"
						duration="2 Months"
					>
						Designed and developed a portfolio website for Triangle
						Studio, a marketing studio based in austria. front-end
						is developed via react and tailwindcss.
					</ModalBody>
				}
				tags={[
					<Badge key="react" colorScheme="blue">
						react
					</Badge>,
					<Badge key="tailwindcss" colorScheme="blue">
						tailwindcss
					</Badge>,
				]}
			>
				Developed a portfolio website for Triangle Studio based in
				Austria via react.
			</ProjectDetailCard>
		</section>
	);
};

export default Projects;
