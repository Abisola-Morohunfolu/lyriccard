import { MainContainer, TextContent, ImageContainerDiv, Overlay } from './ImageContainerStyles';

type ImageContainerProps = {
	imageUrl?: string;
	myRef: any;
};

const ImageContainer: React.FC<ImageContainerProps> = ({ imageUrl, myRef }) => {
	return (
		<MainContainer ref={myRef}>
			{imageUrl && (
				<ImageContainerDiv>
					<Overlay>{/* <h5>She say yes to me</h5> */}</Overlay>
					<img src={imageUrl} alt="demo" />
				</ImageContainerDiv>
			)}
			<TextContent>
				<h5>She say yes to me</h5>
				<p>
					Wizkid, <span>Sweet One</span>
				</p>
			</TextContent>
		</MainContainer>
	);
};

export default ImageContainer;
