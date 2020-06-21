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

  public qSearch = '';

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('heroes constructor');
  }

  loadHeroes(): void {
    if (!this.qSearch) {
      this.heroes = this.heroesService.getHeroes();
    } else {
      this.heroes = this.heroesService.getHeroesByFilter(this.qSearch);
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      const search = paramMap.get('search');
      if (search !== this.qSearch) {
        this.qSearch = search;
        this.loadHeroes();
      }
    });
  }

  heroDetail(idx: number) {
    this.router.navigate(['/hero', idx]);
  }
}
