import React from 'react';

const Footer = () => {
	return (
		<div className=' relative  inset-x-0 bottom-0 pt-60 flex justify-center items-center opacity-50 text-sm'>
			© {new Date().getFullYear()} Joza Smith. All Rights
			Reserved.
		</div>
	);
};

export default Footer;
