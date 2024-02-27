import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const Subtitle: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [30, 60], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const text = 'Version 7';

	const index = frame - 60 > 0 ? frame - 60 : 0;

	const notStriked = text.slice(index / 3, text.length);
	const striked = text.slice(0, index / 3);

	return (
		<div className="text-gray-600 text-6xl" style={{opacity}}>
			<span className="line-through decoration-red-700">{striked}</span>
			<span>{notStriked}</span>
		</div>
	);
};
