import React from 'react';
import { motion } from 'framer-motion';

interface Props {
	children: React.ReactNode;
}

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: -0, y: 20 },
};

const Animation: React.FC<Props> = ({ children }) => {
	return (
		<>
			<motion.div
				initial='hidden'
				animate='enter'
				exit='exit'
				variants={variants}
				transition={{ duration: 0.5, type: 'easeInOut' }}
				style={{ position: 'relative' }}
			>
				{children}
			</motion.div>
		</>
	);
};

export default Animation;
