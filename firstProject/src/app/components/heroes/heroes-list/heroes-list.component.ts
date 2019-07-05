import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/core/services/heroes.service';
import { Heroes } from 'src/app/core/models/heroes.model';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  heroes: Heroes[];

  constructor(private HeroService: HeroesService) { 
    this.heroes = this.HeroService.heroes;
  }

  ngOnInit() {
  }

}
