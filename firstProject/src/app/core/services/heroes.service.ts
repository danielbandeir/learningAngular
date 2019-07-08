import { Injectable } from '@angular/core';
import { Heroes } from '../models/heroes.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes: Heroes[] = [];

  constructor() { }

  addHero(newHero: Heroes) {
    return this.heroes.push(newHero);
  }

  getAllHeroes() {
    return this.heroes;
  }

  getHeroById(id: number) {
    let heroToReturn: Heroes;
    this.heroes.forEach((hero) => {
      if (hero.id === id) {
        heroToReturn = hero;
      }
    });
    return heroToReturn;
  }

  editHero(heroEdited: Heroes) {
    for (const hero of this.heroes) {
      if (hero.id === heroEdited.id) {
        return hero === heroEdited;
      }
    }
  }
}
