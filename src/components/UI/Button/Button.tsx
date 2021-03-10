import { ButtonStyle } from './ButtonStyle';

type Props = {
	clicked: () => void;
};

const CustomButton: React.FC<Props> = ({ children, clicked }) => {
	return (
		<ButtonStyle onClick={clicked}>
			<span>{children}</span>
		</ButtonStyle>
	);
};

export default CustomButton;
