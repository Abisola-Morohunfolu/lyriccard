import styled from 'styled-components';

type ContainerProps = {
	customBG?: string[];
	imageUpload?: string | boolean;
};

export const MainContainer = styled.div<ContainerProps>`
	width: 60vw;
	height: 80vh;
	position: relative;

	border: 1px solid blanchedalmond;
	margin: 3rem 6rem;
`;

export const Overlay = styled.div`
	position: absolute;
	background-color: rgba(0, 0, 0, 0.4);
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;

	h5 {
		position: absolute;
		top: 70%;
		margin: 0 3rem;
		background-color: #fff;
		font-size: 3rem;
		font-weight: 700;
		mix-blend-mode: screen;
	}
`;

export const ImageContainerDiv = styled.div`
	height: 100%;
	position: relative;
	/* width: 100%; */
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const TextContent = styled.div`
	position: absolute;
	top: 70%;
	margin: 0 3rem;

	&::after {
		content: '"';
		position: absolute;
		font-size: 4.8rem;
		font-family: 'Syne', 'Helvetica Neue', sans-serif;
		top: -50%;
		z-index: 100;
		color: #fff;
	}

	h5 {
		background-color: #fff;
		font-size: 3rem;
		font-weight: 700;
		padding: 5px;
		mix-blend-mode: screen;
	}

	p {
		margin-top: 5px;
		color: #fff;
		font-size: 1.8rem;
		font-weight: 700;
		text-transform: uppercase;

		span {
			text-transform: capitalize;
			font-weight: 400;
		}
	}
`;
