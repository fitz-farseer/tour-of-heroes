import { Component } from '@angular/core';

let heroCount = 2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'La Revue des héros';
  titleStyle = {'font-family' : 'Arial', 'color' : 'red'};
  username = 'Anonymous';
  heroes = [
    'Batman', 
    'Superman', 
    'Wonderwoman', 
    'Ironman'
  ];
  heroToAdd = '';
  addHero() {
    this.heroes.push (this.heroToAdd);
    // this.title = 'La Revue des ' + this.heroes.length + ' héros.';
  }
}

