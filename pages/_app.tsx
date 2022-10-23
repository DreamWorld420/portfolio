import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import PageLayout from "../components/layout/PageLayout";
import "../styles/globals.css";
import Navigation from "../components/nav/Navigation";
import NavLink from "../components/nav/NavLink";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<PageLayout maxW="container.lg" className="h-screen flex flex-col">
				<Navigation>
					<NavLink href="/">Home</NavLink>
					<NavLink href="/projects">Work</NavLink>
				</Navigation>
				<Component {...pageProps} />
			</PageLayout>
		</ChakraProvider>
	);
}

export default MyApp;
