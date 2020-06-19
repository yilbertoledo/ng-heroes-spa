import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private heroes: Hero[];

  constructor() {
    console.log('HeroSvc ready');
    this.heroes = HEROES;
  }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHeroesByFilter(filter: string): Hero[] {
    if (filter) {
      const match: Hero[] = [];
      filter = filter.toLowerCase();
      this.heroes.forEach((hero) => {
        if (hero.nombre.toLowerCase().includes(filter.toLowerCase())) {
          match.push(hero);
        }
      });
      console.log(match);
      return match;
    }
    return this.heroes;
  }

  getHero(idx: number): Hero {
    if (idx >= 0 && idx < this.heroes.length) {
      return this.heroes[idx];
    } else {
      return null;
    }
  }
}
