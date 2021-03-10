import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeConatainer = styled.header`
	background-color: #85ffbd;
	/* background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%); */
	background-image: linear-gradient(45deg, #85ffbd 0%, #fff 60%, #fffb7d 100%);

	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	position: relative;

	h1 {
		text-align: center;
		font-size: 5.5rem;
		margin-bottom: 2.5rem;
	}
`;

export const BlackDiv = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	transform: translateY(0);

	height: 100vh;
	/* width: 100%; */

	background-color: #1f1f1f;
	z-index: 200;
`;
