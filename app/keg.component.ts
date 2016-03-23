import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
    <h3>{{ keg.name }}, {{ keg.brand }}</h3>
    <ul><li> Price $ {{ keg.price }}</li><li> alcohol content: {{ keg.alcoholContent }}</li><li>  {{ keg.pints }} pints remaining</li>
  `
})

export class KegComponent {
  public keg: Keg;
}
