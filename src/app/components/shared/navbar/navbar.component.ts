import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  searchHeroes(text: string) {
    if (text && text.trim() !== '') {
      this.router.navigate(['/heroes'], { queryParams: { search: text } });
    } else {
      this.router.navigate(['/heroes']);
    }
  }
}
