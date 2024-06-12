function AttemptsCounter({ attempts }: { attempts: number }) {
	return (
		<div className='flex text-xl gap-2'>
			<span>Attempts:</span>
			<span className='font-bold'>{attempts}</span>
		</div>
	);
}

export default AttemptsCounter;
