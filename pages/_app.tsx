import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import PageLayout from "../components/layout/PageLayout";
import "../styles/globals.css";
import Navigation from "../components/nav/Navigation";
import NavLink from "../components/nav/NavLink";
import theme from "../theme";
import SocialButtonGroup from "../components/ui/SocialButtonGroup";

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				{/* html */}
				<title>Kasra | DreamWorld420</title>
				<meta
					name="description"
					content="Kasra | DreamWorld420 portfolio website"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com/"
					crossOrigin="anonymous"
				/>

				{/* facebook */}
				<meta
					property="og:title"
					content="Kasra | DreamWorld420"
					key="title"
				/>
				<meta
					property="og:description"
					content="Kasra | DreamWorld420 portfolio website"
				/>
				<meta
					property="og:image"
					content="https://www.dreamworld420.com/me.webp"
				/>
				<meta
					property="og:url"
					content="https://www.dreamworld420.com"
				/>

				{/* twitter */}
				<meta name="twitter:title" content="Kasra | DreamWorld420" />
				<meta
					name="twitter:description"
					content="Kasra | DreamWorld420 portfolio website"
				/>
				<meta
					name="twitter:image"
					content="https://www.dreamworld420.com/me.webp"
				/>
				<meta
					property="twitter:url"
					content="https://www.dreamworld420.com"
				/>
				<meta property="twitter:domain" content="dreamworld420.com" />
			</Head>
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
		</>
	);
}

export default App;
