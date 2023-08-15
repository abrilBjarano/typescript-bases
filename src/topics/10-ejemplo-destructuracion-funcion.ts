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


function whoIsOlder( options: WhoIsOlderOptions ): [number] {
   
   let mayor = 0;

   const { girls } = options;

   girls.forEach( ({age}) => {
      if( age > mayor){
         mayor = age;
      }
   });


   return [mayor];
}

const girlsList = [pers1, pers2, pers3];

const [result] = whoIsOlder({
   girls: girlsList,
})


console.log('La persona mayor es: ', result);