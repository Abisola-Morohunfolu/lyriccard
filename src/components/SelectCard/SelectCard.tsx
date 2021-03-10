import { motion } from 'framer-motion';

const SelectCard = () => {
	return (
		<motion.div
			initial={{ x: 0, height: '100%' }}
			exit={{ x: '-100%' }}
			transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
		>
			<h3>hello from select</h3>
		</motion.div>
	);
};

export default SelectCard;
