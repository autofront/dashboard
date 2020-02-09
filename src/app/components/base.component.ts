import { Injectable } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class BaseComponent {
	constructor(private spinner: NgxSpinnerService) {}

	defineAllDefaultValues(): void {
		let { formInputs } = this.component;
		const formInputsKeys = Object.keys(formInputs);
		for (let index in formInputsKeys) {
			const { defaultValue } = formInputs[formInputsKeys[index]];
			this.component.formInputs[formInputsKeys[index]].value = defaultValue;
		}
	}
}
