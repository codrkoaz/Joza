import {
	Box,
	Button,
	Container,
	Group,
	Menu,
	Text,
} from '@mantine/core';
import Link from 'next/link';
import Switcher from './ThemeSwitcher';
import Logo from './logo';
import {
	IconArrowsLeftRight,
	IconMessageCircle,
	IconPhoto,
	IconSearch,
	IconSettings,
} from '@tabler/icons';

const Navbar = () => {
	return (
		<Box>
			<Container className='max-w-3xl flex backdrop-blur-md justify-between flex-nowrap items-center gap-3 pl-1 pr-2 pt-2 '>
				<div className='relative flex items-center'>
					<Logo />
				</div>

				<Group className='hidden md:flex flex-1 items-center font-bold'>
					<div>
						<Link href='/Work'>Work</Link>
					</div>
					<div>
						<Link href='/Skills'>Skills</Link>
					</div>
					<div>
						<a
							href='https://www.github.com/koazie'
							target='_blank'
							rel='noopener'
						>
							Source
						</a>
					</div>
				</Group>

				<div className='max-w-md flex justify-end pt-2 ml-2 gap-2'>
					<div className=' border-2 rounded-md cursor-pointer  p-1'>
						<Switcher />
					</div>
					<div className='float-right rounded-md text-blue-200 md:hidden cursor-pointer '>
						<Menu
							trigger='hover'
							className=' border-2 p-1 rounded-md '
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
										href='https://www.github.com/koazie'
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
