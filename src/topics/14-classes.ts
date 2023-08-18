


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



/*  EXTENDER UNA CLASE  */

export class Ingeniero extends Person {
   constructor (
      public cedula: boolean,
      public titulo: boolean,
      public name: string
   ){
      super( name, 'Monterrey, NL', 'No hay tipo de sangre' );
   }
}

const eduardo = new Ingeniero(true, true, 'Eduardo');
console.log(eduardo);
