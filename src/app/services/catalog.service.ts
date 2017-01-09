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
																'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImUxNWQ5MTJhNmMzY2IyZDcwOWFlZDM5ZjUwNTE0YWFlNjhhNTM5ODhhNGVmMTEwOWJlNDI0ZWIwYWIwMzA0M2JhM2M4NWU3NTM4MGFhYTcxIn0.eyJhdWQiOiIyIiwianRpIjoiZTE1ZDkxMmE2YzNjYjJkNzA5YWVkMzlmNTA1MTRhYWU2OGE1Mzk4OGE0ZWYxMTA5YmU0MjRlYjBhYjAzMDQzYmEzYzg1ZTc1MzgwYWFhNzEiLCJpYXQiOjE0NzU3NTE1ODcsIm5iZiI6MTQ3NTc1MTU4NywiZXhwIjo0NjMxNDI4Nzg3LCJzdWIiOiIyIiwic2NvcGVzIjpbIioiXSwibm9fbXlzdG9yZV9ob3N0cyI6WyJjaGlwcyJdfQ.ep7f7aJgfdwnmBQMXrTHf-aMMYjx3pS4wCKOJ1tp42A9HehJTXXWq7vExxoziy5FmMvqOlvh9UdxUkpooz76M8VPxaFzkp3RRXM938AP_zKgGAv9wliQLAIGNE1tx1hlbaRzf6q6lzbWKbi-rb45GOc8C7CrR4rzpuJu8HbJk0ezovpy210lTuEl5aIWMHGqpNSLyjuN6tYHF3vAnKaj8Z9936sWy4KfHfTuWAqBDJwtTyt8WuwtlxA0fRGBePe8bSy7KaTskP2FmysAizbn0Tga0bADmvtlrarcrzMu--5ZxEGUad8D5nCI-FVNiLXPvei5X8TSxXl1HfRVob8PVlcbmB7iA5ogNfl3czGh_EFoO3w_0AFQ1sX6aYxqfoKKoqIsd0kR04kMFA9yE0TlOyDlUt6xpRmjAnXFuX2Hk5SUZ10HdfEC5Yo8tFobzOi1PjQktGlEPrQBMojUJk05otYFJ8YqSjt9Z0xOQhnnPyN4ZiD4XhV5RVBt7kTIX2QSG6Z0BzDcgOsSS0gCrcb3SMciE5VvHSc7N2TLVXM20fCyYRrtXLxpejuois_bKkKOLQ30Ch7eC-_t0QdSEC-XfIzVTbYdx_FWymwRmz_ASthuy2Zr_KQQSNI4XY7gu4gtMUQBYCG48D5Zp8Qh-c37r56EM_Sa9fnqLVZmfWrsJlo'
															});
    let options = new RequestOptions({ headers: headers });
    return this.http
               .get('https://api.mystore.no/shops/chips/categories', options)
               .map((r: Response) => r.json().data);
  }
}
