import React from 'react';

const Footer = () => {
	return (
		<div className='relative inset-x-0 bottom-0 flex items-center justify-center text-sm opacity-50 pt-60'>
			© {new Date().getFullYear()} Joza Smith. All Rights
			Reserved.
		</div>
	);
};

export default Footer;
