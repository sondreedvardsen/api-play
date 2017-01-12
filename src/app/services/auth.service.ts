import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { WindowService } from "./window.service";

@Injectable()
export class AuthService {

	private apiToken: any;
	accessToken: string;
	refreshToken: string;
	expireToken: number;
	host: string;

  constructor(
		private router: Router,
		private windowService: WindowService
	) { }

	loggedIn() {
		let date = new Date().getTime();
		if(this.accessToken != null && this.expireToken > Math.floor(date / 1000)) {
			return true;
		} else if(this.refreshToken != null) {
			return this.refreshApiToken();
		} else if(localStorage.getItem('apiToken') != null) {
			return this.registerToken();
		}
	}

	registerToken() {
		let token = localStorage.getItem('apiToken');
		if(token != null) {
			this.apiToken = JSON.parse(token);
			let tokenParts = this.apiToken.access_token.split('.');
			let tokenPayload = JSON.parse(atob(tokenParts[1]));
			let date = new Date().getTime();
			if(tokenPayload.exp > Math.floor(date / 1000)) {
				this.accessToken = this.apiToken.access_token;
				this.refreshToken = this.apiToken.refresh_token;
				this.host = tokenPayload.no_mystore_hosts[0];
				return true;
			}
		}
		return false;
	}

	refreshApiToken() {
		return false;
	}

	login() {
		let url = 'https://auth.mystore.no/oauth/authorize?client_id=9&response_type=code&scope=read:products read:categories&redirect_uri=https://sondreedvardsen.github.io/api-play/auth_callback.html';
		let windowHandle = this.windowService.createWindow(url, 'OAuth2 Login', 500, 675);
		let that = this;
		var pollTimer = window.setInterval(function() {
	    if (windowHandle.closed !== false) {
        window.clearInterval(pollTimer);
				if(that.registerToken()) {
					that.router.navigate(['/']);
				}
	    }
		}, 200);
	}

	logout() {
		localStorage.removeItem('apiToken');
		this.router.navigate(['/login']);
	}
}
