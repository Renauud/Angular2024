import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../services/film/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  @Input() filmName = "";
  @Input() filmOnAir = false;
  @Input() filmAffiche = "";
  @Input() index = 0;
  @Input() id = 0;

  constructor(private Film:FilmService) {}

  ngOnInit(): void {
  }


  getOnAir():boolean{
    return this.filmOnAir;
  }

  onWatchFilm():void{
    console.log('Lecture de film démarré');
  }

  changeColor(){
    return this.filmOnAir ? 'purple' : 'red';
  }

  onSwitch(){
    this.Film.switchOnAir(this.index);
  }

}
