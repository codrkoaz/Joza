import {
	useMantineColorScheme,
	ActionIcon,
	Group,
	Box,
} from '@mantine/core';
import { ImSun } from 'react-icons/im';
import { BsMoonStars } from 'react-icons/bs';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
	const { colorScheme, toggleColorScheme } =
		useMantineColorScheme();

	const [isLight, setIsLight] = useState(false);
	const toggleSwitch = () => setIsLight(!isLight);
	return (
		<Box>
			<div
				className='switch'
				data-isOn={isLight}
				onClick={toggleSwitch}
			>
				<motion.div
					className='handle'
					layout
					transition={spring}
				/>
			
			<ActionIcon
				onClick={() => toggleColorScheme()}
				sx={(theme) => ({
					backgroundColor:
						theme.colorScheme === 'dark'
							? theme.colors.dark[6]
							: theme.colors.gray[2],
					color:
						theme.colorScheme === 'dark'
							? theme.colors.orange[2]
							: theme.colors.blue[8],
				})}
			>
				{colorScheme === 'dark' ? (
					<ImSun size={20} className='bg-zinc-900' />
				) : (
					<BsMoonStars size={20} />
				)}
				</ActionIcon>
			</div>
		</Box>
	);
};

const spring = {
	type: 'spring',
	stiffness: 700,
	damping: 30,
};

export default ThemeSwitcher;
