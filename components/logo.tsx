import { Box, Text, Title } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

const logo = () => {
	return (
		<Box className='font-bold '>
			<Link href='/'>
				<div className='inline-flex font-bold items-center h-8 p-10 leading-5 cursor-pointer'>
					<Text size='xl' className='font-bold text-2xl ml-3'>
						Joza Smith
					</Text>
				</div>
			</Link>
		</Box>
	);
};

export default logo;
