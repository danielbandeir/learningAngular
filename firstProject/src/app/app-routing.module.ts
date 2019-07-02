import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesListComponent } from 'src/app/components/heroes/heroes-list/heroes-list.component';
import { HeroesComponent } from './components/heroes/heroes.component';

const routes: Routes = [
  { path: 'list', component: HeroesListComponent },
  { path: 'index', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
