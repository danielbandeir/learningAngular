import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  providers: [HeroesService]
})
export class HeroesListComponent implements OnInit {

  constructor(private HeroService: HeroesService) { }

  ngOnInit() {
  }

}
