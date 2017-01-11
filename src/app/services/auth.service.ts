import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WindowService } from "./window.service";

@Injectable()
export class AuthService {

	private apiToken: string;
	host: string;

  constructor(
		private router: Router,
		private windowService: WindowService
	) { }

	getToken() {
		if(this.loggedIn()) {
			return this.apiToken;
		} else {
			this.logout();
		}
	}

	setToken(apiToken: string) {
		localStorage.setItem('apiToken', apiToken);
	}

	loggedIn() {
		return this.validateToken();
	}

	validateToken() {
		this.apiToken = localStorage.getItem('apiToken');
		if(this.apiToken != null) {
			let tokenParts = this.apiToken.split('.');
			let tokenPayload = JSON.parse(atob(tokenParts[1]));
			this.host = tokenPayload.no_mystore_hosts[0];
			let date = new Date().getTime();
			if(tokenPayload.exp > Math.floor(date / 1000)) {
				return true;
			} else {
				return this.refreshToken();
			}
		}
		return false;
	}

	refreshToken() {
		return false;
	}

	login() {
		let authUrl = 'https://auth.mystore.no/oauth/authorize?client_id=9&response_type=code&scope=read:products read:categories&redirect_uri=https://sondreedvardsen.github.io/api-play/auth_callback.html';
		let windowHandle = this.windowService.createWindow(authUrl, 'OAuth2 Login', 500, 675);
		var pollTimer = window.setInterval(function() {
	    if (windowHandle.closed !== false) {
	        window.clearInterval(pollTimer);
	        console.log('yey');
	    }
		}, 200);
	}

	logout() {
		localStorage.removeItem('apiToken');
		this.router.navigate(['/login']);
	}
}
