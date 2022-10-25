import type { NextPage } from "next";
import DownloadResumeButton from "../components/ui/DownloadResumeButton";
import Hero from "../components/ui/Hero";
import ViewProjectsButton from "../components/ui/ViewProjectsButton";

const Homepage: NextPage = () => {
	return (
		<section className="flex flex-col grow">
			<main className="grow flex flex-col justify-center space-y-4">
				<Hero />
				<div className="md:space-x-2 flex-col space-y-2 md:space-y-0 flex md:flex-row">
					<ViewProjectsButton />
					<DownloadResumeButton />
				</div>
			</main>
		</section>
	);
};

export default Homepage;
