import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template:`
    <div class="container">
      <h1>THE BAR</h1>
      <hr>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegClicked($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent{
  public kegs: Keg[];
  constructor(){
    this.kegs =[
      new Keg("Bud Light", "Anheisher Busch", 10, "4%", 124, 0),
      new Keg("Coors Light", "Coors", 10, "4%", 124, 1),
      new Keg("Mirror Pond", "Deschutes", 3, "4%", 124, 2),
      new Keg("RipStop Rye Pils", "Base Camp", 3, "4%", 1, 3)
    ];
  }
  kegClicked(clickedKeg: Keg): void {
    console.log("parent");
  }
}
