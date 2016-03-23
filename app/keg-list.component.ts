import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.components';
import { NewKegComponent } from './new-keg.component';
import {PricePipe} from './price.pipe';
import {PintPipe} from './pint.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [PricePipe, PintPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="low">Show Low</option>
    <option value="notLow" >Show Not Low</option>
  </select>
  <select (change)="onChange2($event.target.value)">
    <option value="all" selected="selected">Show All Beers</option>
    <option value="below10">Show Kegs Running Low</option>
    <option value="Normal" >Show All Kegs Above 10 Pints</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | lowPrice:filterLow | lowPints:filterLowPints"
  (click)="kegClicked(currentKeg)"
  [class.selected]="currentKeg === selectedKeg"
  [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<any>;
  public selectedKeg: Keg;
  public filterLow: string = "All";
  public filterLowPints: string = "All";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log("child", clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(holder: Array<any>): void {
    this.kegList.push(
      new Keg(holder[0], holder[1], holder[2], holder[3], 124, this.kegList.length)
    );
  }
  onChange(filterOption) {
    this.filterLow = filterOption;

  }
  onChange2(filterOption) {
    this.filterLowPints = filterOption;
  }
}
