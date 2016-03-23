import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "lowPrice",
  pure: false
})

export class PricePipe implements PipeTransform{
  transform(input: Keg[], args){
    console.log('selected keg: ', args[1]);
    var desiredPriceState = args[0];
    if(desiredPriceState === "low"){
      return input.filter((keg) => {
        if(keg.price <= 5 ){
          return !keg.lowPrice;
        }
      });
    } else if (desiredPriceState === "notLow"){
      return input.filter((keg) => {
        if(keg.price >=6){
          return !keg.lowPrice;
        }
      });
    } else {
      return input;
    }
  }
}
