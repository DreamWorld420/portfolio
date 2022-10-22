import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import PageLayout from "../components/layout/PageLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<PageLayout maxW="container.xl">
				<Component {...pageProps} />
			</PageLayout>
		</ChakraProvider>
	);
}

export default MyApp;
