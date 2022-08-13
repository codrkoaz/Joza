import { Container, Group } from '@mantine/core';
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
				<div>
					<Group><h1>Skills</h1></Group>
				</div>{' '}
			</Container>
		</>
	);
};

export default Skills;
