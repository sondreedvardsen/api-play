import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class CatalogService {

  constructor(
		private http: Http,
		private authService: AuthService
	) {	}

	categories(): Observable<any[]> {
		let headers = new Headers({
																'Content-Type': 'application/vnd.api+json',
																'Accept': 'application/vnd.api+json',
																'Authorization': 'Bearer ' + this.authService.accessToken
															});
    let options = new RequestOptions({ headers: headers });
    return this.http
               .get('https://api.mystore.no/shops/' + this.authService.host + '/categories', options)
               .map((res: Response) => res.json().data);
  }
}
