import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import PageLayout from "../components/layout/PageLayout";
import "../styles/globals.css";
import Navigation from "../components/nav/Navigation";
import NavLink from "../components/nav/NavLink";
import theme from "../theme";
import SocialButtonGroup from "../components/ui/SocialButtonGroup";

function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<PageLayout
				maxW="container.lg"
				className="h-screen flex flex-col justify-between"
			>
				<Navigation>
					<NavLink href="/">Home</NavLink>
					<NavLink href="/projects">Work</NavLink>
				</Navigation>
				<Component {...pageProps} />
				<footer className="mb-4 flex flex-row justify-end">
					<SocialButtonGroup />
				</footer>
			</PageLayout>
		</ChakraProvider>
	);
}

export default App;
