import { Component, Input, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ApprenticeService } from '../apprentice.service';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
	faArrowLeft = faArrowLeft;
	faArrowRight = faArrowRight;

	months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
	headers = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim'];
	apprentices;
	month;
	year;
	days;

	constructor(
		private apprenticeService: ApprenticeService
	) { }

	ngOnInit() {
		this.apprentices = this.apprenticeService.getApprentices();

		const date = new Date();
		this.month = date.getMonth();
		this.year = date.getFullYear();
		this.buildGrid();
	}

	goToPreviousMonth() {
		const date = new Date(this.year, this.month - 1);
		this.month = date.getMonth();
		this.year = date.getFullYear();
		this.buildGrid();
	}

	goToNextMonth() {
		const date = new Date(this.year, this.month + 1);
		this.month = date.getMonth();
		this.year = date.getFullYear();
		this.buildGrid();
	}

	buildGrid() {
		const date = new Date(this.year, this.month, 1);

		const numberOfEmptyDays = (date.getDay() + 6) % 7;
		const emptyDays = Array.from({ length: numberOfEmptyDays }, () => {
			return {};
		});

		const apprenticesByDate = this.apprenticeService.getData().reduce((acc, ele) => {
			acc[ele.date] = (acc[ele.date] || []).concat(ele.apprentices);
			return acc;
		}, []);

		const numberOfDays = new Date(this.year, this.month + 1, 0).getDate();
		const days = Array.from({ length: numberOfDays }, (_, i) => {
			return {
			date: i + 1,
			apprentices: apprenticesByDate[i + 1] || []
			};
		});

		this.days = emptyDays.concat(days);
	}
}
