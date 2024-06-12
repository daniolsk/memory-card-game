function Card({
	id,
	cardNumber,
	isOpen,
}: {
	id: number;
	cardNumber: number;
	isOpen: boolean;
	isGuessed: boolean;
}) {
	return (
		<div
			key={id}
			className={`${
				isOpen ? 'bg-green-500' : 'bg-red-500'
			} w-32 h-32 flex justify-center items-center cursor-pointer`}
		>
			<span className='text-4xl'>{isOpen ? cardNumber : '?'}</span>
		</div>
	);
}

export default Card;
