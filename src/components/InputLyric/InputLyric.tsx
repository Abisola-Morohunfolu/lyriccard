import CustomButton from '../UI/Button/Button';
import { InputLyricSection } from './InputLyricStyle';

type InputLyricProps = {
	nextIndex: () => void;
};

const InputLyric: React.FC<InputLyricProps> = ({ nextIndex }) => {
	return (
		<InputLyricSection
			initial={{ x: 0 }}
			exit={{ x: '-100%' }}
			transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
		>
			<h3>Enter the lyric</h3>
			<div>
				{/* add an array of random lyrics placeholder */}
				<input type="text" placeholder="Sho ni CC..." id="lyricInput" />
				<label htmlFor="lyricInput">Enter the lyric</label>
			</div>
			<CustomButton clicked={nextIndex}>Next</CustomButton>
		</InputLyricSection>
	);
};

export default InputLyric;
