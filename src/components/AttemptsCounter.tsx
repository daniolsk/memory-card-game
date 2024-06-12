import React from 'react';

function AttemptsCounter({ attempts }: { attempts: number }) {
	return (
		<div className='flex gap-2'>
			<span>Attempts:</span>
			<span>{attempts}</span>
		</div>
	);
}

export default AttemptsCounter;
