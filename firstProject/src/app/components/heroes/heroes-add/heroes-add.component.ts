import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { Heroes } from 'src/app/core/models/heroes.model';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-heroes-add',
  templateUrl: './heroes-add.component.html',
  styleUrls: ['./heroes-add.component.scss'],
  providers: [HeroesService]
})
export class HeroesAddComponent implements OnInit {

  hero: Heroes;

  heroForm = new FormGroup({
      //heroId : new FormControl(''),
      heroName : new FormControl(''),
      heroImage : new FormControl(''),
      heroDescription : new FormControl('')
  });

  constructor(private HeroService: HeroesService) {
  }

  ngOnInit() {
  }

  addHero(){
    let getSize: Number;
    // this.hero.image = this.heroForm.get('heroImage').value;
    // this.hero.name = this.heroForm.get('heroName').value;
    // this.hero.description = this.heroForm.get('heroDescription').value;
    // this.hero.id = Number(this.HeroService.getCountOfHeroes);
    getSize = Number(this.HeroService.getCountOfHeroes);
    this.heroForm.get('heroId').setValue(getSize);
    this.hero = this.heroForm.value;
    this.HeroService.addHero(this.hero);
    alert("Hero adicionado com sucesso =D");
    console.log(this.HeroService.getAllHeroes());
  }

}
