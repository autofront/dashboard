import { Injectable } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class BaseComponent {
	constructor(private spinner: NgxSpinnerService) {}

	public defineAllDefaultValues(formInputs: any, objectName = 'component', indexName = 'formInputs'): void {
		const formInputsKeys = Object.keys(formInputs);
		for (let index in formInputsKeys) {
			const { defaultValue } = formInputs[formInputsKeys[index]];
			this[objectName][indexName][formInputsKeys[index]].value = defaultValue;
		}
	}
}
