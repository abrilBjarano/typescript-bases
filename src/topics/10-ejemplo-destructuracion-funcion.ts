interface Girl  {
   name: string;
   age: number;
}

const pers1: Girl  = {
   name: 'L',
   age: 21
}

const pers2: Girl  = {
   name: 'Boliboli',
   age: 20
}

const pers3: Girl  = {
   name: 'Lumberjack',
   age: 27
}

interface WhoIsOlderOptions {
   girls: Girl[];
}


function whoIsOlder( options: WhoIsOlderOptions ): [number, string] {
   
   let mayor = 0;

   const { girls } = options;
   

   girls.forEach( ({age}) => {
      
      if( age > mayor){
         mayor = age;
      }
   });

   const girl = girls.find(( girl )=>
      ( mayor === girl.age )
   );

   return [mayor, girl?.name || ''];
}

const girlsList = [pers1, pers2, pers3];

const [result, girlName] = whoIsOlder({
   girls: girlsList,
})


console.log(`La persona mayor es: ${girlName}, ${ result }`);








export {};