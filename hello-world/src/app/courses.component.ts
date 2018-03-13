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
				<button class="btn btn-primary" [class.active]="isActive" (click)="test($event)" >test</button>
				<input (keyup.enter)="onEnter()" />
				<input [(ngModel)]="twoWayBinding" (keyup.enter)="onEnterTwoWay()" />
				<p>{{ pipeText | summary:100 }}</p>
				<br/>
				<input [(ngModel)]="testTitle" type="text" />
				<p>{{ testTitle | titleCase }}</p>
			` // html para o component
})
export class CoursesComponent {
	title = "List of courses";
	courses; 
	isActive = false;
	twoWayBinding = "teste do Diego";
	pipeText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, ratione in dolores ipsum! Voluptatibus asperiores, nemo, voluptas, vitae excepturi, beatae repellat omnis tenetur possimus ipsa aspernatur eos quos ut pariatur.";
	testTitle: string;

	constructor(service: CoursesService) {

		this.courses = service.getCourses();

	}

	test($event) {
		alert('clicou');
		$event.stopPropagation();
		console.log($event);
	}

	onEnter() {
		alert('Olienter');
	}

	onEnterTwoWay() {
		alert(this.twoWayBinding);
	}



}