import { Component, OnInit } from '@angular/core';
import { HeroesService } from "src/app/core/services/heroes.service";

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
  }

}
