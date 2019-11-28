import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ApprenticeService {
	apprentices = ['Robin', 'Yacine', 'Julie', 'Jean-Christophe', 'Romain'];
	data;

 	constructor() {
		this.data = Array.from({ length: 31 }, (_, i) => {
			return {
				date: i + 1,
				month: 1,
				year: 2020,
				apprentices: this.shuffle(this.apprentices).slice(0, Math.floor(Math.random() * (this.apprentices.length + 1)))
			};
		});
	}

	shuffle(arr) {
		const array = arr.slice();
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

	getApprentices() {
		return this.apprentices;
	}
}
