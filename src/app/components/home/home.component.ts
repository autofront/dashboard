import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	component = {
		form: null,
		formInputs: {
			apiUrl: {
				defaultValue: 'https://protected-ridge-35353.herokuapp.com/',
				disabled: true,
				value: 'Lorem ipsum',
			},
		},
		data: null,
		render: {
			class: {
				largeMdSm: 'col-lg-6 col-md-12',
			},
		},
	};

	ngOnInit() {
		this.defineAllDefaultValues();
	}

	defineAllDefaultValues(): void {
		let { formInputs } = this.component;
		const formInputsKeys = Object.keys(formInputs);
		for (let index in formInputsKeys) {
			const { defaultValue } = formInputs[formInputsKeys[index]];
			this.component.formInputs[formInputsKeys[index]].value = defaultValue;
		}
	}

	changeFormInputApiUrl() {
		const { apiUrl } = this.component.formInputs;
	}

	clickEditFormInputApiUrl(): void {
		const { disabled } = this.component.formInputs.apiUrl;
		this.component.formInputs.apiUrl.disabled = !disabled;
	}

	checkFormInputsApiUrlDisabled() {
		return this.component.formInputs.apiUrl.disabled;
	}
}
