import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { Router } from '@angular/router';
import { emit } from 'process';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css'],
})
export class HeroCardComponent implements OnInit {
  @Input() hero: Hero;

  @Output() selectedHero: EventEmitter<number>;

  constructor(private router: Router) {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit(): void {}

  heroDetail(): void {
    // With Output (Parent calls detail component)
    // this.selectedHero.emit(this.idx);
    this.router.navigate(['/hero', this.hero.index]);
  }
}
