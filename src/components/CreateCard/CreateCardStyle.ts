import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SliderContainer = styled.section`
	overflow: hidden;
	position: relative;
`;

export const BlackBox = styled(motion.div)`
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
