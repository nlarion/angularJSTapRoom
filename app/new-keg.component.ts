import {Component, EventEmitter } from 'angular2/core';
import {Keg} from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Create Keg:</h3>
    <input placeholder="Beer Name" class="col-sm-8 input-lg" #newBeerName>
    <input placeholder="Beer Brand" class="col-sm-8 input-lg" #newBeerBrand>
    <input placeholder="Beer Price" class="col-sm-8 input-lg" #newBeerPrice>
    <input placeholder="Alcohol Content" class="col-sm-8 input-lg" #newBeerAlcohol>
    <button (click)="addKeg(newBeerName, newBeerBrand, newBeerPrice, newBeerAlcohol)" class="btn btn-danger">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<any>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userNameOfBeer: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcohol: HTMLInputElement){
    console.log("Creating keg...");
    var holder = [userNameOfBeer.value, userBrand.value, userPrice.value, userAlcohol.value]
    this.onSubmitNewKeg.emit(holder);
    userNameOfBeer.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAlcohol.value = "";
  }
}
