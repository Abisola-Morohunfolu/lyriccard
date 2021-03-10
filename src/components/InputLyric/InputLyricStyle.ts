import { motion } from 'framer-motion';
import styled from 'styled-components';

export const InputLyricSection = styled(motion.section)`
	background-color: #74ebd5;
	background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;

	position: relative;
	transform: translateX(0);
	h3 {
		margin-bottom: 3rem;
		font-size: 3.6rem;
	}

	div {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 4.5rem;
	}

	input {
		font-family: inherit;
		padding: 1rem 2rem;
		min-width: 60%;
		position: relative;
		z-index: 3;
		border: none;
		border-radius: 10px;
		font-size: 1.8rem;
		height: min-content;
	}

	label {
		position: absolute;
		left: 50%;
	}
`;
