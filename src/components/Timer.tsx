function AttemptsCounter({ time }: { time: number }) {
	return (
		<div className='flex text-xl gap-2'>
			<span>Time:</span>
			<span className='font-bold'>{time}</span>
			<span>[s]</span>
		</div>
	);
}

export default AttemptsCounter;
