import React from 'react';
import { animate, motion } from 'framer-motion';

interface Props {
	children: React.ReactNode;
}

const Animation = ({ children }) => {
	return (
		<>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={{
					hidden: {
						scale: 0.4,
						opacity: 0,
					},
					visible: {
						scale: 1,
						opacity: 1,
						transition: {
							delay: 0.6,
						},
					},
				}}
			>
				{children}
			</motion.div>
		</>
	);
};

export default Animation;
