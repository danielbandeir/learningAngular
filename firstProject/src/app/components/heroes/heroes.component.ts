import { Component, OnInit } from '@angular/core';
import { HeroesService } from "src/app/core/services/heroes.service";
import { Heroes } from 'src/app/core/models/heroes.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroesService]
})
export class HeroesComponent implements OnInit {

  constructor(private HeroService: HeroesService) { 
  }

  ngOnInit() {
    console.log(this.HeroService.heroes);
  }

}
