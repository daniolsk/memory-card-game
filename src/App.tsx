import { useState } from 'react';
import Card from './components/Card';

const cardsTemplate = [
	{ image: '', cardNumber: 0, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 0, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 1, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 1, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 2, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 2, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 3, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 3, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 4, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 4, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 5, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 5, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 6, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 6, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 7, isOpen: false, isGuessed: false },
	{ image: '', cardNumber: 7, isOpen: false, isGuessed: false },
];

function App() {
	const [cards, setCards] = useState(cardsTemplate);
	return (
		<main className='min-h-screen p-16 flex flex-col gap-10 justify-center items-center'>
			<div className='grid grid-cols-4 grid-rows-4 gap-4'>
				{cards.map((card, index) => (
					<Card
						id={index}
						cardNumber={card.cardNumber}
						isOpen={card.isOpen}
						isGuessed={card.isGuessed}
					/>
				))}
			</div>
			<div>
				<button className='border-2 rounded-xl px-4 py-2'>Restart</button>
			</div>
		</main>
	);
}

export default App;
