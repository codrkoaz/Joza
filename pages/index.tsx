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
						<title>Joza Smith</title>
					</Head>
					<AboutMe />
				</Container>
			</Layout>
		</>
	);
};

export default Home;
