function AttemptsCounter({ time }: { time: number }) {
	return (
		<div className='flex gap-2'>
			<span>Time:</span>
			<span>{time} [s]</span>
		</div>
	);
}

export default AttemptsCounter;
