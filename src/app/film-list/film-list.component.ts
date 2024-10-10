import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film/film.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  title = 'first-project Films';
  films:any = [];
  filmSubscription : Subscription | undefined;
  
  constructor(private Film:FilmService){}

  ngOnInit(): void {
    this.filmSubscription = this.Film.filmSubject.subscribe((listFilm)=>{
      this.films = listFilm;
    });
    this.Film.emitFilmSubject();
  }

  ngOnDestroy(){
    this.filmSubscription?.unsubscribe();
  }

  onAirAll(){
    this.Film.setOnAir();
  }

  noOnAirAll(){
    this.Film.setNoOnAir();
  }

}
