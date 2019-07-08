import { Component, OnInit, Input } from '@angular/core';
import { Heroes } from 'src/app/core/models/heroes.model';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss']
})
export class HeroesDetailComponent implements OnInit {

  @Input() hero: Heroes;
  @Input() classNam: string;

  constructor() { }

  ngOnInit() {
  }
}
