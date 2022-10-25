import type { FC, ReactNode } from "react";

interface IProps {
	position: string;
	duration: string;
	children: ReactNode;
}

const ProjectModalBody: FC<IProps> = ({ position, duration, children }) => {
	return (
		<section>
			<header className="mb-6">
				<ul className="flex md:flex-row flex-col justify-between font-robotoCondensed border border-x-0 p-2 border-[#9AE6B4] text-sm">
					<li>Position: {position}</li>
					<li>Duration: {duration}</li>
				</ul>
			</header>
			<main className="font-openSans">
				<p>{children}</p>
			</main>
		</section>
	);
};

export default ProjectModalBody;
