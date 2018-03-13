import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent{

	form = new FormGroup({
		username: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
				UsernameValidators.cannotContainSpace
				],
				UsernameValidators.shouldBeUnique
			),
		password: new FormControl('', Validators.required),
		topics: new FormArray([])
	});

	login() {
		//let isValid = authService.login(this.form.value);
		let isValid = false;

		if(!isValid) {
			this.form.setErrors({
				invalidLogin: true
			});
		}

	}

	get username() {
		return this.form.get('username')
	}

	addTopic(topic: HTMLInputElement) {

		(this.form.get('topics') as FormArray).push(new FormControl(topic.value));
		topic.value = '';

	}

	removeTopic(topic: FormControl){
		let index = this.form.get('topics') as FormArray).controls.indexOf(topic);
		(this.form.get('topics') as FormArray).removeAt(index);
	}

	constructor(fb: FormBuilder){

		/*this.form = fb.group({
			name: ['', Validators.required],
			contact: fb.group({
				email: [],
				phone: []
			}),
			topics: fb.array([]);
		})*/

	}

}


