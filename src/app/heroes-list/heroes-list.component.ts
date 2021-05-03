import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

import Hero from '../types/hero.type';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

}
