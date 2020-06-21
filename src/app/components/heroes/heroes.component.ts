import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Hero } from 'src/app/models/hero';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  public qSearch: string = null;

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('heroes constructor');
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      const search = paramMap.get('search');
      if (search !== this.qSearch) {
        this.qSearch = search;
      }
      this.loadHeroes();
    });
  }

  loadHeroes(): void {
    if (!this.qSearch) {
      this.heroes = this.heroesService.getHeroes();
    } else {
      this.heroes = this.heroesService.getHeroesByFilter(this.qSearch);
    }
    console.log(this.heroes);
  }

  heroDetail(idx: number): void {
    console.log(`Heroes.heroDetail(${idx})`);
    this.router.navigate(['/hero', idx]);
  }
}
