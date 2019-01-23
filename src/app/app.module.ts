import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';

//services


//routes
const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'search', component: SearchComponent },
	{ path: 'artists/:id', component: ArtistComponent },
	{ path: 'albums/:id', component: AlbumComponent },
	{ path: 'tracks/:id', component: TrackComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
		ArtistComponent,
        AlbumComponent,
        TrackComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
		
	],
    bootstrap: [AppComponent]
})
export class AppModule { }
