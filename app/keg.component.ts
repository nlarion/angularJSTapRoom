import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <h3 *ngFor="#keg of kegs" (click)="kegWasSelected(keg)">{{ keg.name }} {{ keg.brand }} $ {{ keg.price }} {{ keg.alcoholContent }} {{ keg.pints }} </h3>
  </div>
  `
})

export class KegComponent {
  public keg: Keg;

}
