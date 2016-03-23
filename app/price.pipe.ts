import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "lowPrice",
  pure: false
})

export class PricePipe implements PipeTransform{
  transform(input: Keg[], args){
    var desiredPriceState = args[0];
    if(desiredPriceState === "low"){
      return input.filter((keg) => {
        return keg.price <= 5;
      });
    } else if (desiredPriceState === "notLow"){
      return input.filter((keg) => {
          return keg.price >= 6;
      });
    } else {
      return input;
    }
  }
}
