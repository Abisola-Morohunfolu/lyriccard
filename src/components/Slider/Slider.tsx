import { AnimatePresence } from 'framer-motion';
import { SliderStyle } from './SliderStyle';

type SliderProps = {
	sliderIndex: number;
	components: any[];
	animationType?: 'fade' | 'slide';
};

const Slider: React.FC<SliderProps> = ({ sliderIndex, components }) => {
	return (
		<SliderStyle>
			<AnimatePresence exitBeforeEnter>{components[sliderIndex]()}</AnimatePresence>
		</SliderStyle>
	);
};

export default Slider;
