import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-log-events',
	templateUrl: './log-events.component.html',
	styleUrls: ['./log-events.component.sass'],
})
export class LogEventsComponent {
	username = new FormControl('', Validators.required);
	password = new FormControl('', Validators.required);

	getErrorMessage(control: FormControl) {
		if (control.hasError('required')) { // It is redundant: Different types of answers for various types of "inputs"
			if (control === this.username) {
				return 'Please insert the username. You can use "admin" as the default username.';
			} else {
				return 'Please insert the password. You can use "123" as the default password.';
			}
		} else if (control === this.username && this.username.value !== 'admin') {
			return 'Invalid username. You can use "admin" as the default username.';
		} else if (control === this.password && this.password.value !== '123') {
			return 'Invalid password. You can use "123" as the default password.';
		}
		return '';
	}

	submitForm() {
		if (this.username.valid && this.password.valid) {
			const expectedUsername = 'admin';
			const expectedPassword = '123';

			if (this.username.value === expectedUsername && this.password.value === expectedPassword) {
				const loginScreen = document.querySelector('.container') as HTMLElement;
				loginScreen.style.display = 'none';
			}
		}
	}

}
