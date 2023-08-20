export class Person {

   constructor(
      public name: string = 'No name',
      public address: string = 'No address',
   ){}
}

const abril = new Person('Abril Bejarano', 'Monterrey');
console.log(abril);

const noName = new Person();
console.log(noName); 
/* 

Output:

address: 
"No address"
name: 
"No name"

*/
