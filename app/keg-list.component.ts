import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';



@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  template: `
  <h3 *ngFor="#keg of kegs"         (click)="kegWasSelected(keg)">{{ keg.name }} {{ keg.brand }} $ {{ keg.price }} {{ keg.alcoholContent }} {{ keg.pints }}
  </h3>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  kegClicked(clickedKeg: Keg): void {
    console.log("child", clickedKeg);
  }
}
