import { Box, Container, Text, Title } from '@mantine/core';
import Link from 'next/link';

const NotFound = () => {
	return (
		<Container className='w-screen h-screen flex justify-center items-center flex-col gap-3'>
			<Title order={1}>Not Found</Title>
			<Text weight={700} color='white' className='bg-slate-500 border-2 border-black' >
				The page you're looking for somewhere in space.
			</Text>
			<Box>
				<Link href='/'>
					<button color='orange' className='border rounded-md p-2 bg-slate-500 transition hover:bg-slate-300 text-black'>Return to home</button>
				</Link>
			</Box>
		</Container>
	);
};

export default NotFound;
