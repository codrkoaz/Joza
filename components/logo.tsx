import { Box, Text, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

const logo = () => {
	return (
		<Box className='font-bold '>
			<Link href='/'>
				<div className=' inline-flex font-bold items-center h-8 p-10 leading-2 cursor-pointer pr-6 '>
					<div className='font-extrabold text-2xl text-justify '>
						Joza Smith
					</div>
				</div>
			</Link>
		</Box>
	);
};

export default logo;
