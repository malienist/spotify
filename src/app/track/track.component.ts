import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
	selector: 'app-track',
	templateUrl: './track.component.html',
	styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

	constructor(private spotify: SpotifyService) { }

	ngOnInit() {
		// this.spotify.getTrack(this.id).subscribe((res: any) => this.renderTrack(res));
	}

}
