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
