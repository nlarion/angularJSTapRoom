export class Keg {
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string, public pints: number, public id: number){
  }
  sellPint(): void {
    this.pints = this.pints -1;
  }
}
