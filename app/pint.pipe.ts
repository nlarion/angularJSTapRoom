import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "lowPints",
  pure: false
})

export class PintPipe implements PipeTransform{
  transform(input: Keg[], args){
    console.log(args[0]);
    console.log(args[1]);
    var desiredPintState = args[0];
    if(desiredPintState === "Below 10 Pints"){
      return input.filter((keg) => {
        if(keg.pints <= 10 ){
          return !keg.lowPints;
        }
      });
    } else if (desiredPintState === "Normal"){
      return input.filter((keg) => {
        if(keg.price >= 11){
          return !keg.lowPints;
        }
      });
    } else {
      return input;
    }
  }
}
