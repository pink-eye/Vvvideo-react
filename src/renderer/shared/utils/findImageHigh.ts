import { Image } from 'ytsr';

export const findImageHigh = (array: Image[]) =>
	array.reduce((a, b) => (a.width > b.width ? a : b), array[0]);
