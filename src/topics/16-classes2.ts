export class Person {

   constructor(
      public name: string = 'No name',
      public address: string = 'No address',
   ){}
}


const noName = new Person();
console.log(noName); 
/* 

Output:

address: 
"No address"
name: 
"No name"

*/


export class Hero extends Person {
   
   constructor(
      public alterEgo: string,
      public age: number,
      public realName: string
   ){
      super( realName, 'Monterrey');
   }
}

const abril = new Hero('Spiderman', 25, 'Peter Parker');
console.log(abril);






