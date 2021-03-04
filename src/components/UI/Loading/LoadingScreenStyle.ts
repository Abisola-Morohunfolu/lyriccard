import styled, { keyframes } from 'styled-components';

const fillIn = keyframes`
    0% {
        fill: #fff;
        opacity: 0;
    }
    100% {
        fill: #fff;
        opacity: 1;
        
    }


`;

export const LoadingContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #1f1f1f;

	svg {
		overflow: hidden;
	}

	#outline {
		fill: #fff;
		overflow: hidden;
		position: relative;
	}

	#outline::after {
		content: '';
		fill: #fff;
		background-color: #fff;
		position: absolute;
		height: 10rem;
		width: 10rem;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		/* animation: ${fillIn} 4s ease-in-out forwards;
		transform: translateY(100%); */
	}

	#inner-circle {
		fill: transparent;

		animation: ${fillIn} 4s ease-in-out forwards;
	}
`;
