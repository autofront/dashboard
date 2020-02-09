import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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

	
}
