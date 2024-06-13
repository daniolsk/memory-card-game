import { useEffect, useState } from 'react';
import Card from './components/Card';
import AttemptsCounter from './components/AttemptsCounter';
import { generateCards, randomizeCards } from './lib/utils';
import Timer from './components/Timer';

function App() {
	const [cards, setCards] = useState(randomizeCards(generateCards(8)));
	const [openCardsNumber, setOpenCardsNumber] = useState(0);
	const [guessedCardsNumber, setGuessedCardsNumber] = useState(0);
	const [preventClick, setPreventClick] = useState(false);
	const [moveCounter, setMoveCounter] = useState(0);
	const [time, setTime] = useState(0);
	const [isTimeStopped, setIsTimeStopped] = useState(false);

	const onCardClick = (id: number) => {
		if (preventClick) return;

		const cardIndex = cards.findIndex((card) => card.id === id);

		if (cards[cardIndex].isOpen || cards[cardIndex].isGuessed) return;

		const newCards = [...cards];
		newCards[cardIndex].isOpen = true;
		setCards(newCards);
		setOpenCardsNumber(openCardsNumber + 1);
	};

	useEffect(() => {
		let timerInterval: number;

		if (!isTimeStopped) {
			timerInterval = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		}

		return () => clearInterval(timerInterval);
	}, [isTimeStopped]);

	useEffect(() => {
		if (guessedCardsNumber === 16) {
			setIsTimeStopped(true);
			setTimeout(() => {
				alert(`You won! Attempts: ${moveCounter}, Time: ${time} seconds :)`);
			}, 200);
		}
	}, [guessedCardsNumber, moveCounter, time]);

	useEffect(() => {
		if (openCardsNumber === 2) {
			const newCards = [...cards];
			const filteredCards = newCards.filter(
				(card) => card.isOpen && !card.isGuessed
			);

			if (filteredCards.length === 2) {
				if (filteredCards[0].cardContent === filteredCards[1].cardContent) {
					newCards.forEach((card) => {
						if (card.isOpen && !card.isGuessed) {
							card.isGuessed = true;
						}
					});

					setCards(newCards);
					setOpenCardsNumber(0);
					setMoveCounter((moveCounter) => moveCounter + 1);
					setGuessedCardsNumber((guessedCardsNumber) => guessedCardsNumber + 2);
				} else {
					setPreventClick(true);
					setMoveCounter((moveCounter) => moveCounter + 1);

					setTimeout(() => {
						newCards.forEach((card) => {
							if (card.isOpen && !card.isGuessed) {
								card.isOpen = false;
							}
						});

						setCards(newCards);
						setOpenCardsNumber(0);
						setPreventClick(false);
					}, 700);
				}
			}
		}
	}, [openCardsNumber, cards]);

	return (
		<main className='min-h-screen p-16 flex flex-col gap-8 justify-center items-center'>
			<div className='flex w-[560px] items-center justify-between'>
				<div className='flex gap-4'>
					<AttemptsCounter attempts={moveCounter} />
					<span>/</span>
					<Timer time={time} />
				</div>
				<div>
					<button
						onClick={() => {
							setCards(randomizeCards(generateCards(8)));
							setGuessedCardsNumber(0);
							setOpenCardsNumber(0);
							setMoveCounter(0);
							setTime(0);
							setIsTimeStopped(false);
							setPreventClick(false);
						}}
						className='border-2 border-white transition-all rounded-xl px-4 py-2 hover:bg-white hover:text-black'
					>
						Restart
					</button>
				</div>
			</div>
			<div className='grid grid-cols-4 grid-rows-4 gap-4'>
				{cards.map((card) => (
					<Card
						key={card.id}
						id={card.id}
						cardContent={card.cardContent}
						isOpen={card.isOpen}
						isGuessed={card.isGuessed}
						onCardClick={onCardClick}
					/>
				))}
			</div>
		</main>
	);
}

export default App;
