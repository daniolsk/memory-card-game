import { cn } from '../lib/utils';

interface CardInterface {
	id: number;
	cardContent: string;
	isOpen: boolean;
	isGuessed: boolean;
	numOfPairs: number;
	onCardClick: (id: number) => void;
}

function Card({
	id,
	cardContent,
	isOpen,
	isGuessed,
	numOfPairs,
	onCardClick,
}: CardInterface) {
	return (
		<div
			className={cn(
				'bg-transparent',
				numOfPairs == 8 ? 'w-[12.5vh] h-[12.5vh]' : 'w-[12vh] h-[12vh]'
			)}
			style={{ perspective: '1000px' }}
			onClick={() => onCardClick(id)}
		>
			<div
				className='relative w-full h-full text-center transition-transform duration-[0.8s]'
				style={{
					transformStyle: 'preserve-3d',
					transform: isOpen ? 'rotateY(180deg)' : '',
				}}
			>
				<div
					className='shadow-lg absolute flex justify-center items-center w-full h-full border-4 rounded-xl border-black bg-red-400 cursor-pointer transition-all hover:bg-red-500'
					style={{ backfaceVisibility: 'hidden' }}
				>
					<span className='font-bold text-2xl'>?</span>
				</div>
				<div
					className={cn(
						'shadow-lg absolute flex justify-center items-center w-full h-full border-4 rounded-xl border-black bg-gray-300',
						isGuessed ? 'border-green-500' : ''
					)}
					style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
				>
					<span className='font-bold text-2xl'>{cardContent}</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
