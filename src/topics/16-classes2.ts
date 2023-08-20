export class Person {

   constructor(
      public firstName: string = 'No firstName',
      public lastName: string = 'No lastName',
      public address: string = 'No address',
   ){}
}

{
// const noName = new Person();
// console.log(noName); 
/* 

Output:

address: 
"No address"
name: 
"No name"

*/



// export class Hero extends Person {
//    constructor(
//       public alterEgo: string,
//       public age: number,
//       public realName: string
//    ){
//       super( realName, 'Monterrey');
//    }
// }
}

export class Hero {

   // public person: Person;

   constructor(
      public alterEgo: string,
      public age: number,
      public realName: string,
      public person: Person,
   ){
   }
}

const peter = new Person('Peter', 'Parker', 'Monterrey')
const spiderman = new Hero('Spiderman', 25, 'Peter Parker', peter);
console.log(spiderman);






