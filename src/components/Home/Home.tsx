import CustomButton from '../UI/Button/Button';
// import LoadingScreen from '../UI/Loading/LoadingScreen';
import { HomeConatainer } from './HomeStyle';

const Home: React.FC = () => {
	return (
		<HomeConatainer>
			{/* <LoadingScreen /> */}
			<h1>
				Create a lyric card for your favorite line,
				<br /> in your favorite song.
			</h1>
			<CustomButton>Create your card</CustomButton>
		</HomeConatainer>
	);
};

export default Home;
