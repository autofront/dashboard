import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
	providedIn: 'root',
})
export class RequestService {
	constructor(private http: HttpClient, private spinner: NgxSpinnerService) { }

	request(url: string = null, method: string = 'GET', body = null, headers = null, params = null) {
		let response = { error: false, result: null };
		this.spinner.show();
		this.http.request(method, url, {
			body,
			params,
			headers,
			reportProgress: null,
			withCredentials: null,
			responseType: null,
		}).toPromise()
			.then(result => console.log(result))
			.catch(result => Object.assign(response, { error: true, result }))
			.finally(() => this.spinner.hide());
		return response;
	}
}
