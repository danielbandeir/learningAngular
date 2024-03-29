import { Component, OnInit } from '@angular/core';
import { Heroes } from 'src/app/core/models/heroes.model';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-heroes-edit',
  templateUrl: './heroes-edit.component.html',
  styleUrls: ['./heroes-edit.component.scss'],
})
export class HeroesEditComponent implements OnInit {

  hero: Heroes;

  editHero = this.fb.group({
    heroName : [''],
    heroImage : [''],
    heroDescription : ['']
  });

  constructor(private heroes: HeroesService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.hero = this.heroes.getHeroById(Number(this.route.snapshot.paramMap.get('id')));
  }

  onSubmit() {
    this.hero.id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero.description = this.editHero.get('heroDescription').value;
    this.hero.name = this.editHero.get('heroName').value;
    this.hero.image = this.editHero.get('heroImage').value;

    this.heroes.editHero(this.hero);
  }

}
