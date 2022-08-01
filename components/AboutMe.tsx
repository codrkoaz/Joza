import {
	Avatar,
	Box,
	Container,
	Title,
} from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import { Section } from '@mantine/core/lib/components/AppShell/HorizontalSection/Section/Section';
import Animation from './Animation';

const AboutMe = () => {
	const jozaPic =
		'https://avatars.githubusercontent.com/u/51058620?s=400&u=24e9a67b6ad94629ae89079a88eece9ba1333898&v=4';
	
	
	

	return (
		<Container className='max-w-2xl flex flex-col md:flex '>
			<Box
				sx={(theme) => ({
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[5]
							: theme.colors.gray[2],
					textAlign: 'center',
					fontSize: 'sm',
					padding: theme.spacing.lg,
					borderRadius: theme.radius.lg,
				})}
				className='flex justify-center shrink-0 backdrop-blur-sm flex-nowrap'
			>
				Hello, I'm an frontend developer based in Michigan!
			</Box>
			<Box className='flex justify-center items-center'>
				<Box className='flex flex-auto flex-col'>
					<Title order={2}>Joza Smith</Title>
					<p>
						Digital Craftiman ( Artist / Developer /
						Designer)
					</p>
				</Box>
				<Box className='flex items-center mt-4 mr-10'>
					<Box className='flex border-gray-200 border-2 rounded-full overflow-hidden w-full h-full items-center hover:border-gray-500 cursor-pointer transition duration-200 ease-in-out'>
						<a
							href='https://github.com/koazie'
							target='_blank'
							rel='noopener'
						>
							<Avatar size={100} src={jozaPic} />
						</a>
					</Box>
				</Box>
			</Box>
			<Animation>
			<div>
				
				<div>
					<Title
						order={3}
						className='border-b-2 underline-offset-8 w-14 '
					>
						Work
					</Title>
					<p className='text-justify indent-0.5 whitespace-normal pt-3 w-5/6'>
						I'm a frontend developer and artist based in
						Grand Rapids with a passion for building and
						creating digital stuff. I have a keen for all
						things from launching product, planning and
						designing all the way to solving real-life
						problem with code. When I'm not online I love to
						play games and make designs for my clothing
						brand.
					</p>
					</div>
				
				<div>
					<Title
						order={3}
						className='border-b-2 underline-offset-8 w-14'
					>
						Bio
					</Title>
					<span>1993 Born in Montreal, Quebec</span>
				</div>
				<div>
					<span>
						2021 Completed the Kenzie Academy Associate
						Frontend Web Development Program
					</span>
				</div>
				<div>
					<span></span>
				</div>
			</div>

			<div className='opacity-0'>
				<div>
					<Title
						order={3}
						className='border-b-2 underline-offset-8 w-14'
					>
						My fun
					</Title>
					<span>
						Art, Building Keyboards, Gardening, Music
					</span>
				</div>
				<div>
					<Title
						order={3}
						className='border-b-2 underline-offset-8 w-14'
					>
						Online
					</Title>
					<span></span>
				</div>
			</div>
		</Animation>
		</Container>
	);
};

export default AboutMe;
