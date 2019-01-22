import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { TrackComponent } from './track/track.component';
import { LoginComponent } from './login/login.component';

//services
import { AUTH_PROVIDERS } from './auth.service';

//routes
const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'search', component: SearchComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        AlbumComponent,
        ArtistComponent,
        TrackComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
		AUTH_PROVIDERS
	],
    bootstrap: [AppComponent]
})
export class AppModule { }
