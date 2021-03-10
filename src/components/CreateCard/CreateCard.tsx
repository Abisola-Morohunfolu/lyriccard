import * as React from 'react';
import InputLyric from '../InputLyric/InputLyric';
import SelectCard from '../SelectCard/SelectCard';
import Slider from '../Slider/Slider';
import { BlackBox, SliderContainer } from './CreateCardStyle';

const CreateCard: React.FC = () => {
	const [index, setIndex] = React.useState<number>(0);

	console.log(index);

	const changeIndex = () => {
		if (index >= 3) return;
		setIndex(index + 1);
	};

	return (
		<SliderContainer>
			<BlackBox
				initial={{ y: '0' }}
				animate={{ y: '-100%' }}
				transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
			/>
			<Slider
				sliderIndex={index}
				components={[() => <InputLyric nextIndex={changeIndex} />, SelectCard]}
			/>
			{/* <InputLyric /> */}
		</SliderContainer>
	);
};

export default CreateCard;
