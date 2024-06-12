import { useEffect, useState } from 'react';
import Card from './components/Card';

const cardsTemplate = [
	{ id: 0, image: '', cardNumber: 0, isOpen: false, isGuessed: false },
	{ id: 1, image: '', cardNumber: 0, isOpen: false, isGuessed: false },
	{ id: 2, image: '', cardNumber: 1, isOpen: false, isGuessed: false },
	{ id: 3, image: '', cardNumber: 1, isOpen: false, isGuessed: false },
	{ id: 4, image: '', cardNumber: 2, isOpen: false, isGuessed: false },
	{ id: 5, image: '', cardNumber: 2, isOpen: false, isGuessed: false },
	{ id: 6, image: '', cardNumber: 3, isOpen: false, isGuessed: false },
	{ id: 7, image: '', cardNumber: 3, isOpen: false, isGuessed: false },
	{ id: 8, image: '', cardNumber: 4, isOpen: false, isGuessed: false },
	{ id: 9, image: '', cardNumber: 4, isOpen: false, isGuessed: false },
	{ id: 10, image: '', cardNumber: 5, isOpen: false, isGuessed: false },
	{ id: 11, image: '', cardNumber: 5, isOpen: false, isGuessed: false },
	{ id: 12, image: '', cardNumber: 6, isOpen: false, isGuessed: false },
	{ id: 13, image: '', cardNumber: 6, isOpen: false, isGuessed: false },
	{ id: 14, image: '', cardNumber: 7, isOpen: false, isGuessed: false },
	{ id: 15, image: '', cardNumber: 7, isOpen: false, isGuessed: false },
];

function App() {
	const [cards, setCards] = useState(cardsTemplate);
	const [openCardsNumber, setOpenCardsNumber] = useState(0);
	const [guessedCardsNumber, setGuessedCardsNumber] = useState(0);

	const onCardClick = (id: number) => {
		const cardIndex = cards.findIndex((card) => card.id === id);

		if (cards[cardIndex].isOpen || cards[cardIndex].isGuessed) return;

		const newCards = [...cards];
		newCards[cardIndex].isOpen = true;
		setCards(newCards);
		setOpenCardsNumber(openCardsNumber + 1);
	};

	useEffect(() => {
		console.log(guessedCardsNumber);
		if (guessedCardsNumber === 16) {
			setTimeout(() => {
				alert('You won!');
			}, 200);
		}
	}, [guessedCardsNumber]);

	useEffect(() => {
		if (openCardsNumber === 2) {
			const newCards = [...cards];
			const filteredCards = newCards.filter(
				(card) => card.isOpen && !card.isGuessed
			);

			if (filteredCards.length === 2) {
				if (filteredCards[0].cardNumber === filteredCards[1].cardNumber) {
					newCards.forEach((card) => {
						if (card.isOpen && !card.isGuessed) {
							card.isGuessed = true;
						}
					});

					setCards(newCards);
					setOpenCardsNumber(0);
					setGuessedCardsNumber((guessedCardsNumber) => guessedCardsNumber + 2);
				} else {
					newCards.forEach((card) => {
						if (card.isOpen && !card.isGuessed) {
							card.isOpen = false;
						}
					});

					setTimeout(() => {
						setCards(newCards);
						setOpenCardsNumber(0);
					}, 700);
				}
			} else {
				newCards.forEach((card) => {
					if (card.isOpen && !card.isGuessed) {
						card.isOpen = false;
					}
				});
				setCards(newCards);
				setOpenCardsNumber(0);
			}
		}
	}, [openCardsNumber, cards]);

	return (
		<main className='min-h-screen p-16 flex flex-col gap-10 justify-center items-center'>
			<div className='grid grid-cols-4 grid-rows-4 gap-4'>
				{cards.map((card) => (
					<Card
						key={card.id}
						id={card.id}
						cardNumber={card.cardNumber}
						isOpen={card.isOpen}
						isGuessed={card.isGuessed}
						onCardClick={onCardClick}
					/>
				))}
			</div>
			<div>
				<button
					onClick={() => {
						setCards(
							cardsTemplate.map((card) => ({
								...card,
								isOpen: false,
								isGuessed: false,
							}))
						);
						setOpenCardsNumber(0);
					}}
					className='border-2 rounded-xl px-4 py-2'
				>
					Restart
				</button>
			</div>
		</main>
	);
}

export default App;
