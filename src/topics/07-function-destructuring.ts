interface Product {
   description: string;
   price: number;
}

const phone: Product = {
   description: 's3',
   price: 130
}

const car: Product = {
   description: 'miata',
   price: 4000
}




interface TaxCalculationOptions {
   tax: number;
   products: Product[];
}

function taxCalculation( options: TaxCalculationOptions ): number[] {

   let total = 0;

   options.products.forEach( anyNameVariableItDoesntMatter => {
      total += anyNameVariableItDoesntMatter.price;
   });


   return [ total, total * options.tax ];

}



const shoppingCart = [phone, car];
const tax = 0.15;


const result = taxCalculation({
   tax,
   products: shoppingCart,
});

console.log('Total: ', result[0]);
console.log('Tax: ', result[1]);






























/* FAILED ATTEMPTS ⏬❌ */   

// function taxCalculation( options: TaxCalculationOptions ): number[] {

//    let total = 0;

//    options.products.forEach( element => {
//       total += element.price;
//    });

//    const taxTotal = total * tax; /* 📍 ✅ */

//    console.log(total, taxTotal); /* 📍 ❌ it was a return */

// }




// const shoppingCart = [phone, car];
// const tax = 0.15;



// taxCalculation(shoppingCart); /* 📍 */








export {};