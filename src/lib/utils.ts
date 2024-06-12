import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Card } from '../types/Card';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const randomizeCards = (array: Card[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	return array;
};

export const generateCards = (amountOfPairs: number) => {
	const cards: Card[] = [];
	let id = 0;

	for (let i = 0; i < amountOfPairs; i++) {
		cards.push(
			{ id: id++, cardNumber: i, isOpen: false, isGuessed: false },
			{ id: id++, cardNumber: i, isOpen: false, isGuessed: false }
		);
	}

	return cards;
};
