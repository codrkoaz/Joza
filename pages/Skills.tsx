import { Container } from '@mantine/core';
import Head from 'next/head';
import React from 'react';
import Navbar from '../components/Navbar';

const Skills = () => {
	return (
		<>
			<Head>
				<title>koazie • skills</title>
			</Head>
			<Navbar />
			<Container className='max-w-xl h-screen relative box-border'>
				Skills
			</Container>
		</>
	);
};

export default Skills;
