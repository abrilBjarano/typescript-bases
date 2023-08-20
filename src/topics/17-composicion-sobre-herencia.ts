export class Vehiculo {

   constructor(
      public name: string,
      public wheels: number,
   ){}
}

const miata = new Vehiculo('miata', 4);
console.log(miata);


export class Moto {

   constructor(
      public tipo: string,
      public vehiculo: Vehiculo,
   ){}
}

const moto = new Vehiculo('moto-rosa', 2);
const dwl = new Moto('deportiva', moto);

console.log(dwl);
