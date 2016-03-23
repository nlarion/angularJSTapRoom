import {Component, EventEmitter } from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <div class="row">
    <h3>Edit Name:</h3>
    <input [(ngModel)]="keg.name" class="col-sm-8 input-lg keg-form"/>
  </div>
  <div class="row">
    <h3>Edit brand:</h3>
    <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg keg-form"/>
  </div>
  <div class="row">
    <h3>Edit Price:</h3>
    <input [(ngModel)]="keg.price" class="col-sm-8 input-lg keg-form"/>
  </div>
  <br>
  <div class="row">
    <button (click)="keg.sellPint()" class="btn btn-danger">Sell</button>
  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
