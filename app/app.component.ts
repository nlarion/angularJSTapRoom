import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template:`
    <div class="container">
      <h1>THE BAR</h1>
      <h3>{{ keg.name }} {{ keg.brand }} $ {{ keg.price }} {{ keg.alcoholContent }} {{ keg.pints }} </h3>
    </div>
  `
})

export class AppComponent{
  public keg: Keg;
  constructor(){
    this.keg = new Keg("Bud Light", "Anheisher Busch", 3, "4%", 124, 0);
  }
}
