import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	message: string;

	constructor(private authService: AuthService) {
	}

	ngOnInit() {
	}
	
	login(username: string, password: string): boolean {
		this.message = '';
		if(!this.authService.login(username, password)) {
			this.message = 'Incorrect credentials';
			setTimeout(function() {
				this.message = '';
			}, 2500);
		}
		return false;
	}

	logout(): any {
		this.authService.logout();
		return false;
	}
}
