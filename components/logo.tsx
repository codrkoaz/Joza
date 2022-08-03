import { Box, Text, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

const logo = () => {
	return (
		<Box className='font-bold '>
			<Link href='/'>
				<div className='inline-flex flex-nowrap font-bold items-center h-8 p-10 leading-5 cursor-pointer pr-5'>
					<div className='font-extrabold text-2xl text-justify '>
						Joza Smith
					</div>
				</div>
			</Link>
		</Box>
	);
};

export default logo;
