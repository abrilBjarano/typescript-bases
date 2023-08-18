


export class Person {
   // public name: string;
   // public address: string;
   // public bloodType?: string;

   constructor (
         public name: string, 
         public address: string
   ) {}
}


// const grisi = new Person('Abril', 'Monterrey, NL');
// const nat = new Person('Natalia', 'Cadereyta, NL');
// console.log( grisi );
// console.log( nat );


/*  EXTENDER UNA CLASE  */

export class Ingeniero extends Person {
   constructor (
      public cedula: boolean,
      public titulo: boolean,
      public name: string
   ){
      super(name, 'Monterrey, NL');
   }
}

const eduardo = new Ingeniero(true, true, 'Eduardo',);
console.log(eduardo);
