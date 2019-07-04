import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { Heroes } from 'src/app/core/models/heroes.model';


@Component({
  selector: 'app-heroes-add',
  templateUrl: './heroes-add.component.html',
  styleUrls: ['./heroes-add.component.scss'],
  providers: [HeroesService]
})
export class HeroesAddComponent implements OnInit {

  hero: Heroes;

  constructor(private HeroService: HeroesService) { }

  ngOnInit() {
  }

  addHero(){
    this.HeroService.addHero(this.hero);
    alert("Hero adicionado com sucesso =D");
  }



}
