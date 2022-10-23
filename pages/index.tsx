import type { NextPage } from "next";
import DownloadResumeButton from "../components/ui/DownloadResumeButton";
import Hero from "../components/ui/Hero";
import ViewProjectsButton from "../components/ui/ViewProjectsButton";

const Homepage: NextPage = () => {
	return (
		<section className="flex flex-col h-screen">
			<main className="grow flex flex-col justify-center space-y-4">
				<Hero />
				<div className="space-x-2">
					<DownloadResumeButton />
					<ViewProjectsButton />
				</div>
			</main>
		</section>
	);
};

export default Homepage;
