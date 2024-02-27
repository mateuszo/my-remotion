import {AbsoluteFill, Img, staticFile} from 'remotion';
import {Logo} from './Logo';
import {Subtitle} from './Subtitle';
import {Title} from './Title';
import {z} from 'zod';
import {zColor} from '@remotion/zod-types';
import {Subtitle2} from './Subtitle2';

export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export const MyComposition: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
}) => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<Logo logoColor={propThree} />
			<div className="m-3" />
			<Title titleText={propOne} titleColor={propTwo} />
			<Subtitle />
			<Subtitle2 titleText="2211.19" />
		</AbsoluteFill>
	);
};
