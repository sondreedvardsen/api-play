import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	authUrl: string;

  constructor() {
		this.authUrl = 'https://auth.mystore.no/oauth/authorize?client_id=9&redirect_uri=https://sondreedvardsen.github.io/api-play/login/&response_type=code&scope=read:products read:categories';
	}

  ngOnInit() {
  }

}
