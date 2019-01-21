import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(public http: HttpClient) {
        
    }

    searchTrack(query: string): Observable<any> {
        const params: string = [
            `q=${query}`,
            `type=track`
        ].join('&');
        let queryURL = `https://api.spotify.com/v1/search?${params}`;
        return this.http.get(queryURL).pipe(
            map(res => console.log(`Response - ${res}`))
        );
    }
}
