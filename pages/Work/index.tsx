import { Container } from '@mantine/core';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
const index = () => {
	return (
		<>
			<Head>
				<title>koazie • work</title>
			</Head>
      <Navbar />
			<Container className='max-w-xl h-screen relative box-border'>
				<div>
					<h1>Work</h1>
				</div>
			</Container>
			
		</>
	);
};

export default index;
