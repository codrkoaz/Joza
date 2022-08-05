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
} from '@tabler/icons';

const navRoutes = ['work', 'skills'];

const Navbar = () => {
	const router = useRouter();

	return (
		<Box>
			<Container className='max-w-3xl flex backdrop-blur-md  flex-nowrap items-center gap-3 pl-1 pr-2 pt-2 '>
				<div className='relative flex items-center'>
					<Logo />
				</div>
				{/* <nav>
					{navRoutes.map((singleRoute) => {
						return (
							<navLinks
								key={singleRoute}
								href={`/{singleRoute}`}
								text={singleRoute}
								router={router}
							/>
						);
					})}
				</nav> */}

				<Group className=' xs:invisible sm:invisible md:invisible flex flex-1 justify-start items-center font-bold  '>
					<Link
						href='/Work'
						className='hover:underline decoration-2 underline-offset-4'
					>
						<a
							className={`hover:underline decoration-2 underline-offset-4 p-2 ${
								router.pathname == '/Work'
									? 'bg-gray-500 rounded-md focus:bg-gray-500 text-stone-100'
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
									? 'bg-gray-500 rounded-md focus:bg-gray-500 text-stone-100 '
									: ''
							}`}
						>
							Skills
						</a>
					</Link>
					<div className='hover:underline decoration-2 underline-offset-4'>
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
					<div className='float-right rounded-md text-blue-200 md:visible  2xl:invisible cursor-pointer pr-3 '>
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

// function navLinks({ href, text, router }) {
// 	const isActive =
// 		router.asPath === (href === '/home' ? '/' : href);
// 	return (
// 		<Link href={href === '/home' ? '/' : href} passHref>
// 			<a
// 				href={href === '/home' ? '/' : href}
// 				className={`${
// 					isActive && 'nav_item_active'
// 				} nav_item`}
// 			>
// 				{text}
// 			</a>
// 		</Link>
// 	);
// }

export default Navbar;
