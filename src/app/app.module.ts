import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FormsModule } from '@angular/forms';
import { FilmService } from './services/film/film.service';
import { FilmModifComponent } from './film-modif/film-modif.component';
import { FilmNewComponent } from './film-new/film-new.component';
import { HomeComponent } from './home/home.component';
import { FilmListComponent } from './film-list/film-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmModifComponent,
    FilmNewComponent,
    HomeComponent,
    FilmListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private Film:FilmService){}
}
