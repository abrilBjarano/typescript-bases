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

function taxCalculation( options: TaxCalculationOptions ): [number, number] {

   const { products, tax } = options;

   let total = 0;

   products.forEach( ({ price }) => {
      total += price;
   });


   return [ total, total * tax ];

}



const shoppingCart = [phone, car];
const tax = 0.15;


const [ total, taxResult ] = taxCalculation({
   tax,
   products: shoppingCart,
});

console.log('Total: ', total);
console.log('Tax: ', taxResult);





export {};