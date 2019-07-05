import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { Heroes } from 'src/app/core/models/heroes.model';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-heroes-add',
  templateUrl: './heroes-add.component.html',
  styleUrls: ['./heroes-add.component.scss'],
})
export class HeroesAddComponent implements OnInit {

  hero: Heroes;

  heroForm = this.fb.group({
      heroId : [''],
      heroName : [''],
      heroImage : [''],
      heroDescription : ['']
  });

  constructor(private HeroService: HeroesService, private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  resetForm(){
    this.heroForm.reset;
  }

  addHero(){
    let idToHero: Number;
    idToHero = this.HeroService.heroes.length;
    this.hero = new Heroes(idToHero , this.heroForm.get('heroName').value, this.heroForm.get('heroImage').value, this.heroForm.get('heroDescription').value);
    this.HeroService.addHero(this.hero);
    this.heroForm.reset;
    alert("Hero adicionado com sucesso =D");
  }

}
