import React from 'react';

const Footer = () => {
	return (
		<div className='h-screen w-screen absolute  border-box flex justify-center items-center opacity-30 text-sm'>
			© {new Date().getFullYear()} Joza Smith. All Rights
			Reserved.
		</div>
	);
};

export default Footer;
