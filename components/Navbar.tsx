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
			<Container className='flex items-center max-w-2xl gap-3 pt-3 pl-1 pr-10 backdrop-blur-sm '>
				<div className='flex items-center  shrink-0'>
					<Logo />
				</div>

				<Group className='flex flex-row items-center font-bold  xs:hidden'>
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
							href='https://github.com/codrkoaz/joza'
							target='_blank'
							rel='noopener'
							className='flex items-center gap-2'
						>
							Source
						<IconBrandGithub size={20}/>
						</a>
					</div>
				</Group>

				<div className='flex items-center justify-end flex-auto gap-3 p-1 break-words'>
					<div className='p-1 border-2 rounded-md cursor-pointer '>
						<Switcher />
					</div>
					<div className='box-border relative justify-center hidden cursor-pointer xs:flex'>
						<Menu
							trigger='hover'
							className='p-1 border-2 rounded-md '
						>
							<Box className='relative flex flex-col items-center justify-center font-bold '>
								<div className='flex justify-center w-full hover:bg-gray-500'>
									<Link href='/Work'>Work</Link>
								</div>
								<div className='flex justify-center w-full hover:bg-gray-500'>
									<Link href='/Skills'>Skills</Link>
								</div>
								<div className='flex justify-center w-full hover:bg-gray-500'>
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
