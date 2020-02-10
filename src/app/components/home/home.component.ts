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
				defaultValue: 'https://protected-ridge-35353.herokuapp.com/api/',
				disabled: true,
				value: 'Lorem ipsum',
			},
			pageName: {
				defaultValue: null,
				disabled: true,
				value: null,
				options: []
			},
		},
		data: null,
		render: {
			class: {
				largeMdSm: 'col-lg-6 col-md-12',
			},
		},
	};

	async ngOnInit() {
		this.defineAllDefaultValues(this.component.formInputs);
		await this.getPages();
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

	makeUrl(path = null) {
		const { value } = this.component.formInputs.apiUrl;
		return value.concat(path);
	}

	async getPages() {
		const url = this.makeUrl('pages')
		const response = await this.request.request(url);
		if (!response.error) {
			this.component.formInputs.pageName.options = response.result.data;
		}

	}

	async getPage() {
		const ts = await this.request.request('https://protected-ridge-35353.herokuapp.com/');
		console.log(ts);
	}

	async mutatePage() {
		const ts = await this.request.request('https://protected-ridge-35353.herokuapp.com/');
		console.log(ts);
	}
}
