import styled from 'styled-components';

export const ButtonStyle = styled.button`
	background: #1f1f1f;
	position: relative;
	border: none;
	outline: none;
	font-family: inherit;
	text-transform: capitalize;

	font-size: 1.8rem;
	font-weight: 800;
	padding: 1.6rem 2.4rem;
	color: #fff;
	border-radius: 4px;
	cursor: pointer;
	overflow: hidden;
	transform: scale(1);
	transition: all 0.4s ease-in-out;

	span {
		position: relative;
		z-index: 10;
	}

	&::after {
		content: '';
		position: absolute;
		background: #4158d0; /* fallback for old browsers */
		background: -webkit-linear-gradient(
			43deg,
			#4158d0 0%,
			#c850c0 46%,
			#ffcc70 100%
		); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			43deg,
			#4158d0 0%,
			#c850c0 46%,
			#ffcc70 100%
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: translateY(100%);
		transition: all 0.3s cubic-bezier(0, 1.06, 0.62, 1);
	}

	&:hover&::after {
		transform: translateY(0);
	}

	&:hover {
		transform: scale(1.01);
	}
`;
