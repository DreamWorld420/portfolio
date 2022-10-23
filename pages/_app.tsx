import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import PageLayout from "../components/layout/PageLayout";
import "../styles/globals.css";
import Navigation from "../components/nav/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<PageLayout maxW="container.lg">
				<Navigation>s</Navigation>
				<Component {...pageProps} />
			</PageLayout>
		</ChakraProvider>
	);
}

export default MyApp;
