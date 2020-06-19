import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  public hero: Hero = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(`Received id: ${params.id}`);
      const selectedHero: Hero = this.heroService.getHero(params.id);
      if (selectedHero) {
        this.hero = selectedHero;
        console.log(`Selected hero: ${this.hero.nombre}`);
      }
    });
  }
}
