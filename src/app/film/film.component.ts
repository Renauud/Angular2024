import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  filmName = "Jurassic Park";
  filmOnAir = "En Blue Ray";
  filmAffiche = 'https://upload.wikimedia.org/wikipedia/fr/6/6a/Jurassic_Park_logo.svg';

  constructor() { }

  ngOnInit(): void {
  }


  getOnAir():string{
    return this.filmOnAir;
  }

  onWatchFilm():void{
    console.log('Lecture de film démarré');
  }

}
