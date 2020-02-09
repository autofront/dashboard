import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent implements OnInit {
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
		this.defineAllDefaultValues(this.component.formInputs);
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
