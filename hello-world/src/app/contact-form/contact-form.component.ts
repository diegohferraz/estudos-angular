import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

	contactMethods = [
		{id: 1, name: 'email'},
		{id: 2, name: 'phone'},
		{id: 3, name: 'letter'}
	];

  submit(form) {
  	console.log(form);
  }

}
