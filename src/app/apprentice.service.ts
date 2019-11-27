import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApprenticeService {
	data;

 	constructor() {
		const apprentices = ['Robin', 'Yacine', 'Julie', 'Jean-Christophe', 'Romain'];
		this.data = Array.from({ length: 31 }, (_, i) => {
			return {
			date: i + 1,
			month: 1,
			year: 2020,
			apprentices: this.shuffle(apprentices).slice(0, Math.floor(Math.random() * (apprentices.length + 1)))
			};
		});
	}

	shuffle(array) {
		let j, x, i;
		for (i = array.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = array[i];
			array[i] = array[j];
			array[j] = x;
		}
		return array;
	}

	getData() {
		return this.data;
	}
}
