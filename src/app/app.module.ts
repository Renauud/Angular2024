import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { FormsModule } from '@angular/forms';
import { FilmService } from './services/film/film.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private Film:FilmService){}
}
