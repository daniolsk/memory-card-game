function Card({
	id,
	cardNumber,
	isOpen,
	isGuessed,
	onCardClick,
}: {
	id: number;
	cardNumber: number;
	isOpen: boolean;
	isGuessed: boolean;
	onCardClick: (id: number) => void;
}) {
	return (
		<div
			onClick={() => onCardClick(id)}
			className={`${isOpen ? 'bg-green-500' : 'bg-red-500'} ${
				isGuessed ? 'bg-blue-500' : ''
			} w-32 h-32 flex justify-center items-center cursor-pointer`}
		>
			{isGuessed ? (
				<span className='text-4xl'>{cardNumber}</span>
			) : (
				<span className='text-4xl'>{isOpen ? cardNumber : '?'}</span>
			)}
		</div>
	);
}

export default Card;
