import Navbar from '../Navbar';
import React from 'react';
import Footer from '../Footer';
import { Container } from '@mantine/core';

interface Props {
	children: React.ReactNode;
}

const layout: React.FC<Props> = ({ children }) => {
	return (
		<>
				<Navbar />
			<div>
				<main>{children}</main>
			</div>
				<Footer />
		</>
	);
};

export default layout;
