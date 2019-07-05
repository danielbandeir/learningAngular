import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { Heroes } from 'src/app/core/models/heroes.model';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-heroes-add',
  templateUrl: './heroes-add.component.html',
  styleUrls: ['./heroes-add.component.scss'],
})
export class HeroesAddComponent implements OnInit {

  hero: Heroes;

  heroForm = new FormGroup({
      heroName : new FormControl(''),
      heroImage : new FormControl(''),
      heroDescription : new FormControl('')
  });

  constructor(private HeroService: HeroesService) {
  }

  ngOnInit() {
  }

  resetForm(){
    console.log(this.heroForm.value);
    this.heroForm.reset;
    console.log(this.heroForm.value);
  }

  addHero(){
    // const { name, image, description } = this.heroForm.value;
    // this.hero = new Heroes(name, image,);
    // this.hero.image = this.heroForm.get('heroImage').value;
    // this.hero.name = this.heroForm.get('heroName').value;
    // this.hero.description = this.heroForm.get('heroDescription').value;
    // this.hero.id = this.HeroService.getCountOfHeroes == null ? 0 : Number(this.HeroService.getCountOfHeroes);
    this.HeroService.addHero(this.hero);
    alert("Hero adicionado com sucesso =D");
    console.log(this.HeroService.getAllHeroes());
  }

}
