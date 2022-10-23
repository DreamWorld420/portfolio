import type { NextPage } from "next";
import DownloadResume from "../components/ui/DownloadResume";
import Hero from "../components/ui/Hero";

const Homepage: NextPage = () => {
	return (
		<section className="flex flex-col h-screen">
			<main className="grow flex flex-col justify-center">
				<Hero />
				<DownloadResume />
			</main>
		</section>
	);
};

export default Homepage;
