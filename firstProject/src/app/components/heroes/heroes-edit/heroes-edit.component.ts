import { Component, OnInit } from '@angular/core';
import { Heroes } from 'src/app/core/models/heroes.model';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-edit',
  templateUrl: './heroes-edit.component.html',
  styleUrls: ['./heroes-edit.component.scss'],
  providers: [HeroesService]
})
export class HeroesEditComponent implements OnInit {

  hero:Heroes;

  constructor(private heroes: HeroesService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.hero = this.heroes.getHeroById(Number(this.route.snapshot.paramMap.get('id')));
  }

  saveHeroDescription(){
    this.heroes.editHero(this.hero);
    alert('Editado com sucesso =D');
  }

}
