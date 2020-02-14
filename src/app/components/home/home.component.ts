import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent {

	component = {
		data: {
			learnPlanningData: [
				{
					icon: "fa fa-tasks",
					title: "Pattern",
					text: "Map all patterns",
				},
				{
					icon: "fa fa-robot",
					title: "Automate",
					text: "Automate mapped patterns",
				},
				{
					icon: "fa fa-chart-line",
					title: "Improve",
					text: "Continuous improvement of standards",
				}
			]
		}
	}
}
