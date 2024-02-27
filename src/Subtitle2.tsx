import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

export const Subtitle2: React.FC<{
	titleText: string;
}> = ({titleText}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [90, 130], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const opacity2 = interpolate(frame, [130, 160], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<>
			<div style={{opacity}} className="text-gray-600 text-6xl mt-5">
				{' '}
				2211.19
			</div>
			<div
				style={{opacity: opacity2}}
				className="text-gray-600 font-bold text-6xl mt-5"
			>
				{' '}
				Released!
			</div>
		</>
	);
};
