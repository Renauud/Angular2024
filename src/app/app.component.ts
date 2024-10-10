import { Component, OnInit } from '@angular/core';
import { FilmService } from './services/film/film.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-project Films';
  time:number = 0;
  films:any = [];
  
  constructor(private Film:FilmService){}

  ngOnInit(): void {
    this.films = this.Film.films;
    const counter = interval(1000);
    counter.subscribe(
      (value)=>{
        this.time = value;
      },
      (error)=>{
        console.log('Error :' + error);
      },
      () => {
        console.log("Observable complete !"); 
      }
    )
  }

  onAirAll(){
    this.Film.setOnAir();
  }

  noOnAirAll(){
    this.Film.setNoOnAir();
  }

}
