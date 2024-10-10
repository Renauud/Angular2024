import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmNewComponent } from './film-new/film-new.component';
import { HomeComponent } from './home/home.component';
import { FilmModifComponent } from './film-modif/film-modif.component';

const routes:Routes = [
  {
    path:'films',
    component:FilmListComponent
  },
  {
    path:'new',
    component:FilmNewComponent
  },
  {
    path :'modif/:id',
    component : FilmModifComponent
  },
  {
    path:'home',
    component:HomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
