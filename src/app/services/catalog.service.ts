import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CatalogService {

  constructor(private http: Http) {	}

	categories(): Observable<any[]> {
		let headers = new Headers({
																'Content-Type': 'application/vnd.api+json',
																'Accept': 'application/vnd.api+json',
																'Authorization': 'Bearer ' + localStorage.getItem('apiToken')
															});
    let options = new RequestOptions({ headers: headers });
    return this.http
               .get('https://api.mystore.no/shops/chips/categories', options)
               .map((res: Response) => res.json().data);
  }
}
