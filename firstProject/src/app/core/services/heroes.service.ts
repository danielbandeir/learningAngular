import { Injectable } from '@angular/core';
import { Heroes } from '../models/heroes.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes: Heroes[] = [];

  constructor() { 
    //  this.heroes.push(
    //    new Heroes(0, 'Batman', 'https://jovemnerd.com.br/wp-content/uploads/2019/02/the-batman-760x428.jpg', 'sem descrição')
    //  );
    //  this.heroes.push(
    //    new Heroes(1, 'Superman', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4wC1pes12DV2ck4hwM3bddhpS0d4iKU2maj7AL0SqP61HFaj', 'sem descrição')
    //  );
    //  this.heroes.push(
    //    new Heroes(2, 'Deadpool', 'https://abrilexame.files.wordpress.com/2017/12/deadpool.jpg', 'sem descrição')
    //  );
  }

  addHero(newHero: Heroes){
    return this.heroes.push(newHero);
  }

  getAllHeroes(){
    return this.heroes;
  }

  getHeroById(id: number){
    let heroToReturn: Heroes;
    this.heroes.forEach((hero)=>{
      if(hero.id == id){
        heroToReturn = hero;
      }
    });
    return heroToReturn;
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

  editHero(heroEdited: Heroes){
    for(let i = 0; i<this.heroes.length; i++){
      if(this.heroes[i].id == heroEdited.id){
        return this.heroes[i] == heroEdited;
      }
    }
  }
}
