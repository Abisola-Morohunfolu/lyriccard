import { ButtonStyle } from './ButtonStyle';

const CustomButton: React.FC = ({ children }) => {
	return (
		<ButtonStyle>
			<span>{children}</span>
		</ButtonStyle>
	);
};

export default CustomButton;
