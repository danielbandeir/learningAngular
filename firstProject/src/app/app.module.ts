import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroesEditComponent } from './heroes/heroes-edit/heroes-edit.component';
import { HeroesDetailComponent } from './heroes/heroes-detail/heroes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroesComponent,
    HeroesListComponent,
    HeroesEditComponent,
    HeroesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
