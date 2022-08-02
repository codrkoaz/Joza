import {
	Avatar,
	Box,
	Button,
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
		<Container className='max-w-2xl flex-1 justify-center items-center box-border'>
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
				className='flex justify-center backdrop-blur-sm flex-wrap'
			>
				Hello, I'm an frontend developer based in Michigan!
			</Box>
			<Box className='flex  xs:flex-col justify-center items-center'>
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
						<p className='text-justify indent-0.5  pt-3 w-5/6'>
							I'm a frontend developer and artist based in
							Grand Rapids with a passion for building and
							creating digital stuff. I have a keen for all
							things from launching product, planning and
							designing all the way to solving real-life
							problem with code. When I'm not online I love
							to play games and make designs for my clothing
							brand.
						</p>
					</div>
					<div className='flex justify-center pb-5'>
						<Button className='bg-gradient-to-r from-orange-300 to-red-400 border-none w-32 rounded-lg hover:from-red-400 hover:to-orange-300 '>
							<a download href='/JosephSmithResume.pdf'>
								Portfolio
							</a>
						</Button>
					</div>
					{/* background-image: linear-gradient(135deg, #FBD786 10%, #f7797d 100%); */}
					<Box className='box-border border py-10'>
						<Title
							order={3}
							className='border-b-2 underline-offset-8 w-8'
						>
							Bio
						</Title>
						<div>
							<span className='flex flex-row gap-3 pt-3'>
								<p className='font-bold'>1993</p> Born in
								Montreal, Quebec
							</span>
							<span className='flex flex-row gap-3 justified'>
								<p className='font-bold'>2021</p> Completed
								the Kenzie Academy Associate Frontend Web
								Development Program
							</span>
						</div>
					</Box>

					<div>
						<span></span>
					</div>
				</div>

				<div className=''>
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
				</div>
			</Animation>
		</Container>
	);
};

export default AboutMe;
