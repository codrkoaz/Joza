import {
	useMantineColorScheme,
	ActionIcon,
	Group,
	Box,
} from '@mantine/core';
import { ImSun } from 'react-icons/im';
import { BsMoonStars } from 'react-icons/bs';

const ThemeSwitcher = () => {
	const { colorScheme, toggleColorScheme } =
		useMantineColorScheme();

	return (
		<Box>
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
					<ImSun size={20} className='bg-zinc-900'/>
				) : (
					<BsMoonStars size={20} />
				)}
			</ActionIcon>
		</Box>
	);
};

export default ThemeSwitcher;
