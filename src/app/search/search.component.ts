import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	private windowWidth: any;
	@HostListener('window: resize', ['$event'])
	onResize(event) {
		this.windowWidth = window.innerWidth;
	}
    query: string;
    results: Object;

    constructor(private spotifyService: SpotifyService, private router: Router, private route: ActivatedRoute) { 
		this.windowWidth = window.innerWidth;
        this.route.queryParams.subscribe(params => { 
            this.query = params['query'] || ''; 
        });
    }

    ngOnInit(): void {
        this.search();
    }

    search(): void {
        console.log('this.query-', this.query);
        if(!this.query){
            return;
        }
        this.spotifyService.searchTrack(this.query).subscribe((res: any) => {
			// console.log(`search.component.search() - ${res}`);
            this.renderResults(res);
        });
    }

    renderResults(res: any): void {
		// console.log(`rendering results - ${res}`);
        this.results = null;
        if(res && res.tracks && res.tracks.items) {
            this.results = res.tracks.items;
			// console.log(`results rendered - ${this.results}`);
        }
    }

    submit(query: string): void {
        this.router.navigate(['search'], { queryParams: { query: query } }).then(_ => this.search() );
    }
}
