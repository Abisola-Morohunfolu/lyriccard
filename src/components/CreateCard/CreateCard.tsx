import * as htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import * as React from 'react';
// import InputLyric from '../InputLyric/InputLyric';
import CustomButton from '../UI/Button/Button';
import { BlackBox, Container } from './CreateCardStyle';
import ImageContainer from './ImageContainer/ImageContainer';

const CreateCard: React.FC = () => {
	const sectionRef = React.useRef<HTMLDivElement>(null);
	const anchorRef = React.useRef<HTMLAnchorElement>(null);
	const [url, setUrl] = React.useState('');

	// const imageRef = React.useRef<HTMLImageElement>(null);

	const createCanva = () => {
		// const currentNode = sectionRef !== null ? sectionRef : container;

		if (sectionRef.current !== null) {
			htmlToImage
				.toPng(sectionRef.current, {
					width: 768,
					height: 600,
					pixelRatio: 1,
				})
				.then(function (dataUrl) {
					var img = new Image();

					img.src = dataUrl;
					console.log(img);

					// sectionRef?.current?.appendChild(img);

					if (anchorRef.current !== null) {
						// alert('fired!!!');
						anchorRef.current.href = dataUrl;
						anchorRef.current.target = '_blank';
						anchorRef.current.download = 'my-download';
						anchorRef.current.click();
					}
				})
				.catch(function (error) {
					console.error('oops, something went wrong!', error);
				});
		}
	};

	const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		// if (imageRef.current !== null && event.target.files !== null) {
		// 	imageRef.current.src = URL.createObjectURL(event.target?.files[0]);
		// }
		if (event.target.files !== null) {
			setUrl(URL.createObjectURL(event.target?.files[0]));
		}
	};

	return (
		<Container>
			<BlackBox
				initial={{ y: '0' }}
				animate={{ y: '-100%' }}
				exit={{ y: '0' }}
				transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
			/>

			{/* <Slider
				sliderIndex={index}
				components={[() => <InputLyric nextIndex={changeIndex} />, SelectCard]}
			/> */}

			<div>
				<input
					type="file"
					accept="image/*"
					name="image"
					id="file"
					onChange={(event) => loadFile(event)}
				/>
				<label htmlFor="image"> upload image</label>
			</div>
			{/* <div>
				<img
					src=""
					width="200"
					height="200"
					alt="upload"
					ref={imageRef}
					style={{ objectFit: 'cover' }}
				/>
			</div> */}
			<ImageContainer imageUrl={url} myRef={sectionRef} />
			<CustomButton clicked={createCanva}>Create Card</CustomButton>
			<a href="/" ref={anchorRef}>
				Download
			</a>
			{/* <InputLyric /> */}
		</Container>
	);
};

export default CreateCard;
