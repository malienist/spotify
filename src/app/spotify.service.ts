import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {
	static BASE_URL = 'https://api.spotify.com/v1';

    constructor(public http: HttpClient) {
    }

	query(URL: string, params?: Array<string>): Observable<any> {
		let queryURL = `${SpotifyService.BASE_URL}${URL}`;
		if(params) {
			queryURL = `${queryURL}?${params.join('&')}`;
		}
		//add generated api key from https://developer.spotify.com/console/get-search-item/
		const apiKey = '';
		const headers: HttpHeaders = new HttpHeaders({
			Authorization: `Bearer ${apiKey}`
		});
		return this.http.get(queryURL, {
			headers: headers
		}).pipe(
			map((res: any) => {
				res;
				console.log('spotify.service.query() - ', res);
			})
		);
	}

	search(query: string, type: string): Observable<any> {
		return this.query(
			`/search`, [
				`q=${query}`,
				`type=${type}`
			]
		);
	}
	
    searchTrack(query: string): Observable<any> {
		return this.search(query, 'track');
    }

	getTrack(id: string): Observable<any> {
		return this.query(`/tracks/${id}`);
	}
}
