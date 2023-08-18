


export class Person {
   // public name: string;
   // public address: string;
   // public bloodType?: string;

   constructor (
         public name: string, 
         public address: string, 
         public bloodType: string = 'No hay tipo de sangre'
   ) {}
}


const grisi = new Person('Abril', 'Monterrey, NL');
const nat = new Person('Natalia', 'Cadereyta, NL', 'O');
console.log( grisi );
console.log( nat );
