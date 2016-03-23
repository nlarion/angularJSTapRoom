import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "lowPints",
  pure: false
})

export class PintPipe implements PipeTransform{
  transform(input: Keg[], args){
    var desiredPintState = args[0];
    if(desiredPintState === "below10"){
      return input.filter((keg) => {
        return keg.pints <= 10;
      });
    } else if (desiredPintState === "Normal"){
      return input.filter((keg) => {
        return keg.pints >= 11;
      });
    } else {
      return input;
    }
  }
}
