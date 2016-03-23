import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  template: `
  <h3 *ngFor="#currentKeg of kegList"         (click)="kegClicked(currentKeg)">{{ currentKeg.name }} {{ currentKeg.brand }} $ {{ currentKeg.price }} {{ currentKeg.alcoholContent }} {{ currentKeg.pints }}
  </h3>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<any>;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log("child", clickedKeg);
    this.onKegSelect.emit(clickedKeg);
  }
}

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template:`
    <div class="container">
      <h1>THE BAR</h1>
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
      new Keg("Bud Light", "Anheisher Busch", 3, "4%", 124, 0),
      new Keg("Coors Light", "Coors", 3, "4%", 124, 1),
      new Keg("Mirror Pond", "Deschutes", 3, "4%", 124, 2),
      new Keg("RipStop Rye Pils", "Base Camp", 3, "4%", 124, 3)
    ];
  }
  kegClicked(clickedKeg: Keg): void {
    console.log("parent", clickedKeg);
  }
}

export class Keg {
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string, public pints: number, public id: number){

  }
}
