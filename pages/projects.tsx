import { NextPage } from "next";
import ReactBadge from "../components/TechBadges/ReactBadge";
import Project from "../components/ui/Project";

const Projects: NextPage = () => {
	return (
		<section className="grid grid-cols-2 gap-4">
			<Project
				title="Triangle Studio"
				href="https://trianglestudio.org/"
				summary="Developed a portfolio website for Triangle Studio based in
				Austria via react."
				position="Front-end developer"
				duration="2 Months"
				tags={[<ReactBadge key="react" />]}
			>
				Designed and developed a portfolio website for Triangle Studio,
				a marketing studio based in austria. front-end is developed via
				react and tailwindcss.
			</Project>
		</section>
	);
};

export default Projects;
