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

	getCategories(): Observable<any[]> {
		let url = 'https://api.mystore.no/shops/' + this.authService.host;
		let headers = new Headers(
			{
				'Content-Type': 'application/vnd.api+json',
				'Accept': 'application/vnd.api+json',
				'Authorization': 'Bearer ' + this.authService.accessToken
			}
		);
		let options = new RequestOptions({ headers: headers });
		return this.http
			.get(url + '/categories', options)
			.map(this.extractData)
      .catch(this.handleError);
  }

	private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      let body = error.json() || '';
      let err = body.errors[0] || JSON.stringify(body);
      errMsg = `${err.status} - ${err.title}: ${err.detail}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
