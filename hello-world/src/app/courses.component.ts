import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
	selector: 'courses', //referencia no CSS , pode ser .courses ou #courses
	template: `
				<h2>{{ title }}</h2>
				<ul>
					<li *ngFor="let course of courses">
						{{ course }}
					</li>
				</ul>
			` // html para o component
})
export class CoursesComponent {
	title = "List of courses";
	courses; 

	constructor(service: CoursesService) {

		this.courses = service.getCourses();

	}

}