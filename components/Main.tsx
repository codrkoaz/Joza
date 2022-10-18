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
import JozaPic from '../public/assets/joza 1.png';

const AboutMe = () => {
	return (
		<Container className='max-w-xl h-screen flex-1 justify-center items-center box-border'>
			<KBarCommand />
			<div className='shrink-0 flex flex-row pr-2 font-bold italic text-gray-500/80'>
				<p className='flex items-center  mt-3 mr-20 text-sm text-gray-600 dark:text-gray-400'>
					<RiLightbulbLine
						className='shrink-0 hover:text-yellow-300 hover:text-lg'
						size={21}
					/>
					<span>&nbsp; Tip: Use</span>
					<button className='shrink-0 mx-2 inline bg-white focus:outline-none dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-400 text-gray-600 dark:text-white text-sm leading-5 py-0.5 px-1.5 border border-gray-500 rounded-md'>
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
					padding: theme.spacing.md,
					borderRadius: theme.radius.lg,
				})}
				className='flex justify-center backdrop-blur-sm flex-wrap '
			>
				Hello, I'm an frontend developer based in Michigan!
			</Box>
			<Box className='flex xs:flex-col justify-center items-center pt-8'>
				<Box className='flex flex-auto flex-col'>
					<Title order={2}>Joza Smith</Title>
					<p>
						Digital Craftiman ( Artist / Developer /
						Designer )
					</p>
				</Box>
				<Box className='flex shrink-0 items-center mt-4 mr-10'>
					<Box className='block border-gray-200 border-2 rounded-full overflow-hidden w-24 h- items-center hover:border-gray-500 cursor-pointer transition duration-200 ease-in-out'>
						<a
							href='https://github.com/koazie'
							target='_blank'
							rel='noopener'
						>
							<Image
								src={JozaPic}
								alt='JozaPic'
								width={100}
								height={100}
								layout='responsive'
							/>
						</a>
					</Box>
				</Box>
			</Box>
			<Animation>
				<div>
					<div>
						<Title
							order={3}
							className=' underline dark:decoration-stone-300/50 decoration-stone-800/40 underline-offset-8 pt-3 '
						>
							Work
						</Title>
						<p className='text-justify indent-4 pt-3 w-full'>
							I'm a frontend developer and digital artist based in
							Grand Rapids with a passion for building and
							creating fun stuff. I have a keen for all
							things from planning and
							designing all the way to solving real-life
							problem with code. When I'm not online I like
							to play games and make designs for my clothing
							brand in the making.
						</p>
					</div>
					<div className='flex justify-center pb-5 pr-5 gap-4 pt-2'>
						<a
							download
							href='/JosephSmithResume.pdf'
							className='flex justify-center items-center gap-4 pl-3'
						>
							<Button className=' flex justify-center items-center bg-gradient-to-r from-orange-300 to-red-400 border-none w-32 rounded-lg hover:from-red-400 hover:to-orange-300'>
								Resume
								<IconChevronRight size={15} />
							</Button>
						</a>
					</div>
					<Box className='box-border py-10'>
						<Title
							order={3}
							className='underline decoration-stone-300/50 underline-offset-8'
						>
							Bio
						</Title>
						<div>
							<span className='flex flex-row gap-3 pt-3'>
								<p className='font-bold'>1993</p> Born in
								Montreal, Quebec
							</span>
							<span className='flex flex-row gap-3 justified'>
								<p className='font-bold'>2015</p> Received my Certificate in Graphic Designs from Washtenaw Community College
							</span>
							<span className='flex flex-row gap-3 justified'>
								<p className='font-bold'>2021</p> Completed
								my Associate Frontend Web Development Program from Kenzie Academy
							</span>
							<span className='flex flex-row gap-3 justified'>
								<p className='font-bold'>2022</p> Built and managing my clothing brand Unknwn Rarity
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
						className=' underline decoration-stone-300/50 underline-offset-8'
					>
						Hobbies
					</Title>
					<div>
						<span className='flex flex-row indent-3 pt-3 justified'>
							Art, Building Keyboards, Gardening, Music,
							Playing Games, Learning Korean & Japanese
						</span>
					</div>
				</Box>
			</Animation>
		</Container>
	);
};

export default AboutMe;
