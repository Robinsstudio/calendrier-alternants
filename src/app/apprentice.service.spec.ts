import { TestBed } from '@angular/core/testing';

import { ApprenticeService } from './apprentice.service';

describe('ApprenticeService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: ApprenticeService = TestBed.get(ApprenticeService);
		expect(service).toBeTruthy();
	});
});
