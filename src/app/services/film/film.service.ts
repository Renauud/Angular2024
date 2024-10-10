import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  filmSubject = new Subject<any[]>();

  constructor() { }

  private films = [
    {
      id:1,
      title : 'Jurassic Park',
      onAir : true,
      filmAffiche : 'https://upload.wikimedia.org/wikipedia/fr/6/6a/Jurassic_Park_logo.svg',
    },
    {
      id:2,
      title : 'Star Wars : Episode I',
      onAir : false,
      filmAffiche : 'https://i.ebayimg.com/images/g/hv4AAOSw34FVHKY3/s-l400.jpg',
    },
    {
      id:3,
      title : 'Dune',
      onAir : false,
      filmAffiche : 'https://fr.web.img6.acsta.net/pictures/21/08/10/12/20/4633954.jpg',
    },
  ]

  setOnAir(){
    for(const film of this.films){
      film.onAir = true;
    }
    this.emitFilmSubject();
  }

  setNoOnAir(){
    for(const film of this.films){
      film.onAir = false;
      console.log(film);
    }
    this.emitFilmSubject();
  }

  switchOnAir(index: number){
    this.films[index].onAir = !this.films[index].onAir;
    this.emitFilmSubject();
  }

  getFilmById(id: number){
    let tmp;
    for(const film of this.films){
      if(film.id == id){
        tmp = film;
      }
    }
    return tmp;
  }

  emitFilmSubject(){
    this.filmSubject.next(this.films.slice());
  }
}
