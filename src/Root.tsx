import {Composition} from 'remotion';
import {MyComposition, myCompSchema} from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={240}
				fps={30}
				width={720}
				height={720}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'SAP composable storefront',
					titleColor: '#000000',
					logoColor: '#00bfff',
				}}
			/>
		</>
	);
};
