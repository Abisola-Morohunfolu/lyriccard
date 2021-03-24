import { useHistory } from 'react-router-dom';
import CustomButton from '../UI/Button/Button';
// import LoadingScreen from '../UI/Loading/LoadingScreen';
import { BlackDiv, HomeConatainer } from './HomeStyle';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home: React.FC = () => {
	const { push } = useHistory();

	return (
		<>
			<HomeConatainer>
				<BlackDiv
					transition={transition}
					initial={{ y: '0%' }}
					exit={{ y: 0 }}
					animate={{
						y: '100%',
						transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.9 },
					}}
				/>
				{/* <LoadingScreen /> */}
				<h1>
					Create a lyric card for your favorite line,
					<br /> in your favorite song.
				</h1>
				<CustomButton clicked={() => push('/create')}>Create your card</CustomButton>
			</HomeConatainer>
		</>
	);
};

export default Home;
