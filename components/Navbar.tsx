import {
	Box,
	Container,
	Group,
	Menu,
	Text,
} from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Switcher from './ThemeSwitcher';
import Logo from './logo';
import {
	IconArrowsLeftRight,
	IconMessageCircle,
	IconPhoto,
	IconSearch,
	IconSettings,
	IconBrandGithub
} from '@tabler/icons';

const navRoutes = ['work', 'skills'];

const Navbar = () => {
	const router = useRouter();

	return (
		<Box>
			<Container className='max-w-2xl flex backdrop-blur-sm items-center gap-3 pl-1 pt-3 pr-10 '>
				<div className=' flex shrink-0 items-center'>
					<Logo />
				</div>

				<Group className=' xs:hidden flex flex-row items-center font-bold '>
					<Link
						href='/Work'
						className='hover:underline decoration-2 underline-offset-4'
					>
						<a
							className={`hover:underline decoration-2 underline-offset-4 p-2 ${
								router.pathname == '/Work'
									? 'text-orange-300 text-lg'
									: ''
							}`}
						>
							Work
						</a>
					</Link>
					<Link
						href='/Skills'
						className='hover:underline decoration-2 underline-offset-4'
					>
						<a
							className={`hover:underline decoration-2 underline-offset-4 p-2 ${
								router.pathname == '/Skills'
									? 'text-orange-300 text-lg'
									: ''
							}`}
						>
							Skills
						</a>
					</Link>
					<div className=' hover:underline decoration-2 underline-offset-4'>
						<a
							href='https://www.github.com/codrkoaz'
							target='_blank'
							rel='noopener'
							className='flex items-center gap-2'
						>
							Source
						<IconBrandGithub size={20}/>
						</a>
					</div>
				</Group>

				<div className='flex flex-auto justify-end break-words gap-3 items-center p-1'>
					<div className=' border-2 rounded-md cursor-pointer p-1'>
						<Switcher />
					</div>
					<div className='relative hidden xs:flex justify-center box-border cursor-pointer'>
						<Menu
							trigger='hover'
							className=' border-2 p-1 rounded-md'
						>
							<Box className=' relative flex justify-center flex-col font-bold items-center '>
								<div className='flex justify-center hover:bg-gray-500 w-full'>
									<Link href='/Work'>Work</Link>
								</div>
								<div className='flex justify-center hover:bg-gray-500 w-full'>
									<Link href='/Skills'>Skills</Link>
								</div>
								<div className='flex justify-center hover:bg-gray-500 w-full'>
									<a
										href='https://www.github.com/codrkoaz'
										target='_blank'
										rel='noopener'
									>
										Source
									</a>
								</div>
							</Box>
						</Menu>
					</div>
				</div>
			</Container>
		</Box>
	);
};

export default Navbar;
