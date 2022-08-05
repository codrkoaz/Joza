import {
	Avatar,
	Box,
	Button,
	Container,
	Title,
} from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import Animation from './Animation';
import { IconChevronRight } from '@tabler/icons';
import { RiLightbulbLine } from 'react-icons/ri';
import KBarCommand from './KBarCommand';

const jozaPic =
	'https://avatars.githubusercontent.com/u/51058620?s=400&u=24e9a67b6ad94629ae89079a88eece9ba1333898&v=4';

const AboutMe = () => {
	return (
		<Container className='max-w-xl h-screen flex-1 justify-center items-center box-border'>
			<KBarCommand />
			<div className='pr-2 font-bold italic text-gray-500/80'>
				<p className='flex items-center  mt-3 mr-20 text-sm text-gray-600 dark:text-gray-400'>
					<RiLightbulbLine className=' hover:text-yellow-300 hover:text-lg'size={21} />
					<span>&nbsp; Tip: Use</span>
					<button className='mx-2 inline bg-white focus:outline-none dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-400 text-gray-600 dark:text-white text-sm leading-5 py-0.5 px-1.5 border border-gray-500 rounded-md'>
						<kbd className='font-sans no-underline'>⌘ </kbd>
						<kbd className='font-sans'>K </kbd>
					</button>
					to quickly navigate the site.
				</p>
			</div>
			<div className='h-96'></div>
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
				className='flex justify-center backdrop-blur-sm flex-wrap '
			>
				Hello, I'm an frontend developer based in Michigan!
			</Box>
			<Box className='flex  xs:flex-col justify-center items-center pt-8'>
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
							className=' underline decoration-stone-200/40 underline-offset-8 pt-3 '
						>
							Work
						</Title>
						<p className='text-justify indent-4 pt-3 w-5/6'>
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
					<div className='flex justify-center pb-5 pr-5 gap-4'>
						<Button className=' flex justify-center items-center bg-gradient-to-r from-orange-300 to-red-400 border-none w-32 rounded-lg hover:from-red-400 hover:to-orange-300'>
							<a
								download
								href='/JosephSmithResume.pdf'
								className='flex justify-center items-center gap-4 pl-3'
							>
								Resume
								<IconChevronRight size={15} />
							</a>
						</Button>
					</div>
					<Box className='box-border py-10'>
						<Title
							order={3}
							className='underline decoration-stone-200/40 underline-offset-8'
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

				<Box className='py-10 box-border'>
					<Title
						order={3}
						className=' underline decoration-stone-200/40 underline-offset-8'
					>
						Hobbies
					</Title>
					<div>
						<span className='flex flex-row indent-3 pt-3'>
							Art, Building Keyboards, Gardening, Music,
							Learning Korean & Japanese
						</span>
					</div>
				</Box>
			</Animation>
		</Container>
	);
};

export default AboutMe;
