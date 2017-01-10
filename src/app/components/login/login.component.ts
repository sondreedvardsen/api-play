import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private authUrl: string;
	private token: string;
  private sub: any;

  constructor(private route: ActivatedRoute) {
		this.authUrl = 'https://auth.mystore.no/oauth/authorize?client_id=9&redirect_uri=https://s3-eu-west-1.amazonaws.com/api-auth-demo/callback.html&response_type=code&scope=read:products read:categories';
	}

  ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
       this.token = params['token'];
       localStorage.setItem('apiToken', this.token);
    });
  }

}
