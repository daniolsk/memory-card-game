import { useEffect, useState } from 'react';
import { generateCards, randomizeCards } from './lib/utils';
import AttemptsCounter from './components/AttemptsCounter';
import Card from './components/Card';
import Timer from './components/Timer';

function App() {
	const [cards, setCards] = useState(randomizeCards(generateCards(8)));
	const [openCardsNumber, setOpenCardsNumber] = useState(0);
	const [guessedCardsNumber, setGuessedCardsNumber] = useState(0);
	const [preventClick, setPreventClick] = useState(false);
	const [moveCounter, setMoveCounter] = useState(0);
	const [time, setTime] = useState(0);
	const [isTimeStopped, setIsTimeStopped] = useState(false);
	const [numberOfPairs, setNumberOfPairs] = useState(8);

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

	const restartGame = (numOfPairs?: number) => {
		if (!numOfPairs) numOfPairs = numberOfPairs;

		setCards(randomizeCards(generateCards(numOfPairs)));
		setNumberOfPairs(numOfPairs);
		setGuessedCardsNumber(0);
		setOpenCardsNumber(0);
		setMoveCounter(0);
		setTime(0);
		setIsTimeStopped(false);
		setPreventClick(false);
	};

	return (
		<main className='min-h-screen p-16 flex flex-col items-center justify-center gap-8'>
			<div className='flex items-center justify-center'>
				<div className='flex gap-4'>
					<AttemptsCounter attempts={moveCounter} />
					<span>/</span>
					<Timer time={time} />
				</div>
			</div>
			<div className='grid grid-cols-4 grid-rows-4 gap-4 justify-center justify-items-center mx-auto'>
				{cards.map((card) => (
					<Card
						key={card.id}
						id={card.id}
						cardContent={card.cardContent}
						isOpen={card.isOpen}
						isGuessed={card.isGuessed}
						onCardClick={onCardClick}
						numOfPairs={numberOfPairs}
					/>
				))}
			</div>
			<div className='flex gap-4'>
				<button
					onClick={() => restartGame()}
					className='border-4 font-semibold border-white transition-all rounded-xl px-4 py-2 hover:bg-white hover:text-black'
				>
					Restart
				</button>
				<div className='flex-1 w-1 rounded-xl bg-white mx-4'></div>
				<button
					onClick={() => restartGame(8)}
					className='border-4 font-semibold border-white transition-all rounded-xl px-4 py-2 hover:bg-white hover:text-black'
				>
					4x4
				</button>
				<button
					onClick={() => restartGame(10)}
					className='border-4 font-semibold border-white transition-all rounded-xl px-4 py-2 hover:bg-white hover:text-black'
				>
					4x5
				</button>
			</div>
		</main>
	);
}

export default App;
