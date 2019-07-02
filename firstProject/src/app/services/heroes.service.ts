import { Injectable } from '@angular/core';
import { Heroes } from '../models/heroes.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes: Heroes[];

  constructor() { }

  addHero(id: number, name: String, image: String){
    this.heroes.push(
      new Heroes(id, name, image)
    );
  }

  getAllHeroes(){
    return this.heroes;
  }

  getHeroById(id: number){
    this.heroes.forEach((hero)=>{
      if(hero.id == id){
        return hero;
      }
    });
  }

  getHeroByName(name: String){
    this.heroes.forEach((hero)=>{
      if(hero.name == name){
        return hero;
      }
    });
  }

  getCountOfHeroes(){
    return this.heroes.length;
  }

  editHero(id: number, name: String, image: String){
    for(let i = 0; i<this.heroes.length; i++){
      if(this.heroes[i].id == id){
        this.heroes[i] == new Heroes(id, name, image);
        break;
      }
    }
  }
}
