import styled, { keyframes } from 'styled-components';

// const bgAnimate = keyframes`
//     0% {

// 	background-image: linear-gradient(45deg, #85ffbd 0%, #fff 80%, #fffb7d 100%);
//     }
//     25% {
//         -color: #85ffbd;
// 	background-image: linear-gradient(75deg, #85ffbd 0%, #fff 70%, #fffb7d 100%);
//     }
//     45% {

// 	background-image: linear-gradient(90deg, #85ffbd 0%, #fff 60%, #fffb7d 100%);
//     }
//     75% {

// 	background-image: linear-gradient(75deg, #85ffbd 0%, #fff 70%, #fffb7d 100%);
//     }
//     100% {

// 	background-image: linear-gradient(50deg, #85ffbd 0%, #fff 80%, #fffb7d 100%);
//     }

// `;

export const HomeConatainer = styled.header`
	background-color: #85ffbd;
	/* background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%); */
	background-image: linear-gradient(45deg, #85ffbd 0%, #fff 60%, #fffb7d 100%);

	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	align-items: center;

	h1 {
		text-align: center;
		font-size: 5.5rem;
		margin-bottom: 2.5rem;
	}

	/* animation: 4s infinite ease-in-out forwards; */
`;
