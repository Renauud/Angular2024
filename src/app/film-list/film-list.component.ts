import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  title = 'first-project Films';
  films:any = [];
  
  constructor(private Film:FilmService){}

  ngOnInit(): void {
    this.films = this.Film.films;
  }

  onAirAll(){
    this.Film.setOnAir();
  }

  noOnAirAll(){
    this.Film.setNoOnAir();
  }

}
