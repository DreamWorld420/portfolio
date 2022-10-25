import { NextPage } from "next";
import ReactBadge from "../components/TechBadges/ReactBadge";
import TailwindBadge from "../components/TechBadges/TailwindBadge";
import Project from "../components/ui/Project";

const Projects: NextPage = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-4">
			<Project
				title="Triangle Studio"
				href="https://trianglestudio.org/"
				summary="a portfolio website for Triangle Studio based in
				Austria."
				position="Front-end developer"
				duration="6 Months"
				tags={[
					<ReactBadge key="react" />,
					<TailwindBadge key="tailwindcss" />,
				]}
			>
				Designed and developed a portfolio website for Triangle Studio,
				a marketing studio based in austria. front-end is developed via
				react and tailwindcss.
			</Project>
			<Project
				title="bhoc.ownedcore.com"
				href="https://bhoc.ownedcore.com/"
				summary="a client and a seller dashboard for a gaming forum to sell online gaming boosts."
				position="Lead front-end developer"
				duration="4 Months"
				tags={[
					<ReactBadge key="react" />,
					<TailwindBadge key="tailwindcss" />,
				]}
			>
				Developed a client and a seller dashboard which a seller can
				place orders for an online gaming boost services and a client
				can take the order and complete it.
			</Project>
			<Project
				title="Smurfy"
				href="https://www.smurfy.gg/"
				summary="an spa website developed via react to sell League of Legends accounts.	"
				position="Front-end developer"
				duration="3 Months"
				tags={[
					<ReactBadge key="react" />,
					<TailwindBadge key="tailwindcss" />,
				]}
			>
				Developed an spa website to sell League of Legends accounts.
				developed via react.
			</Project>
		</section>
	);
};

export default Projects;
