import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

//Services
import { HeroesService } from "src/app/core/services/heroes.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesListComponent } from './components/heroes/heroes-list/heroes-list.component';
import { HeroesEditComponent } from './components/heroes/heroes-edit/heroes-edit.component';
import { HeroesDetailComponent } from './components/heroes/heroes-detail/heroes-detail.component';
import { HeroesAddComponent } from './components/heroes/heroes-add/heroes-add.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroesComponent,
    HeroesListComponent,
    HeroesEditComponent,
    HeroesDetailComponent,
    HeroesAddComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
