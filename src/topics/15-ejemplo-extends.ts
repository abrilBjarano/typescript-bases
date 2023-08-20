class Disco {

   constructor(
      public name: string,
      public singer: string,
      public songs: number
   ){}
}

// const fijacionOral = new Disco('Fijación Oral', 'Shakira', 11);
// console.log( fijacionOral );


// class DiscoEspecial extends Disco {

//    constructor(

//       public name: string,
//       public singer: string,
//       public songs: number,
//       public aditivo: string
//    ){
//       super(name, singer, songs);
//    }
// }

class DiscoEspecial {

   constructor(

      public name: string, 
      public singer: string,
      public songs: number,
      public aditivo: string
   ){

   }
}

const piesDescalzos = new DiscoEspecial('Pies Descalzos Sueños Blancos', 'Shakira', 11, 'Poster');
console.log( piesDescalzos );
