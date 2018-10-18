import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import {HeroService} from '../hero.service';
// import { Observable } from 'rxjs/internal/Observable';
// import { of } from 'rxjs'; // ??
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
 
    heroes: Hero[];
    selectedHero: Hero;
 
    constructor(private heroService: HeroService) { }
  
    ngOnInit() {
      this.getHeroes();
    }
  
    // we want to get data from external server so we gonna change this method from:
    // getHereos(): void{
    //   this.heroes = this.heroService.getHereos();
    // }
    // to:
    getHeroes(): void { 
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }
  // click event
   onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}