import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private sub: any;

  constructor(
		private router: Router,
		private route: ActivatedRoute,
		private authService: AuthService
	) { }

  ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			if(params['token'] != null) {
 				this.authService.setToken(params['token']);
			}
    });
  }

	login() {
		this.authService.login();
	}

}
