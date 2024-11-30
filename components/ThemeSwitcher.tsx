import {
	useMantineColorScheme,
	ActionIcon,
	Box,
} from '@mantine/core';
import { IconSun } from '@tabler/icons';
import { IconMoon } from '@tabler/icons-react';
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
							? theme.colors.dark[9]
							: theme.colors.gray[2],
					color:
						theme.colorScheme === 'light'
							? theme.colors.blue[9]
							: theme.colors.orange[2],
				})}
			>
				{colorScheme === 'dark' ? (
					<IconSun stroke={2}/>
				) : (
					<IconMoon stroke={2} />
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
