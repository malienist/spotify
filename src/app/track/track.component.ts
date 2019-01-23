import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
	selector: 'app-track',
	templateUrl: './track.component.html',
	styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
	id: string;
	track: Object;

	constructor(private spotify: SpotifyService, private ar: ActivatedRoute) {
		this.ar.params.subscribe(params => this.id = params['id']);
	}

	ngOnInit() {
		this.spotify.getTrack(this.id).subscribe((res: any) => this.renderTrack(res));
	}
	
	renderTrack(res: any): void {
		console.log(`track.component.renderTrack() - ${res}`);
		this.track = res.albums.track;
	}
}
