import { Box, Container } from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutMe from '../components/Main';
import Layout from '../components/Layout/layout';

const Home: NextPage = () => {
	return (
		<>
			<Layout>
				<Container>
					<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="koazie's homepage" />
        <meta name="author" content="Joza Smith" />
        <meta name="author" content="koazie" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Joza Smith" />
        <meta name="twitter:site" content="@koazie" />
        <meta name="twitter:creator" content="@koazie" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Joza Smith" />
        <meta name="og:title" content="Joza Smith" />
        <meta property="og:type" content="website" />
						<title>koazie • home </title>
					</Head>
					<AboutMe />
				</Container>
			</Layout>
		</>
	);
};

export default Home;
