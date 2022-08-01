import Navbar from '../Navbar';
import React from 'react';
import Footer from '../Footer';

interface Props {
	children: React.ReactNode;
}

const layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<div>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default layout;
