interface Product {
   description: string;
   price: number;
}

const phone: Product = {
   description: 'Samsung S23',
   price: 1300.00
}

const car: Product = {
   description: 'Mazda Miata',
   price: 4000.00
}



interface TaxCalculationOptions {
   tax: number;
   products: Product[];
}

function taxCalculation( options: TaxCalculationOptions ): number[] {

   let total = 0;

   options.products.forEach( element => {
      total += element.price;
   });

   return [ total, total * options.tax ];

}



const shoppingCart = [phone, car];
const tax = 0.15;


const result = taxCalculation({
   tax,
   products: shoppingCart,
});

console.log('Total', result[0]);
console.log('Tax', result[1]);


export {};