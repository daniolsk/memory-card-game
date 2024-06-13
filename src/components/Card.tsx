import { cn } from '../lib/utils';

function Card({
	id,
	cardContent,
	isOpen,
	isGuessed,
	onCardClick,
}: {
	id: number;
	cardContent: string;
	isOpen: boolean;
	isGuessed: boolean;
	onCardClick: (id: number) => void;
}) {
	return (
		<div
			className='w-32 h-32 bg-transparent'
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
