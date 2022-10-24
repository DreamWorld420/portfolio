import { NextPage } from "next";
import ProjectDetailCard from "../components/ui/ProjectDetailCard";

const Projects: NextPage = () => {
	return (
		<section className="grid grid-cols-2 gap-4">
			<ProjectDetailCard
				title="Triangle Studio"
				href="https://trianglestudio.org/"
			>
				Developed a portfolio website for Triangle Studio based in
				Austria via react.
			</ProjectDetailCard>
		</section>
	);
};

export default Projects;
