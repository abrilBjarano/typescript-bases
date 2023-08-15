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

// function taxCalculation( options: TaxCalculationOptions ): number[] /* 📎 se pone mejor [number, number] para que no haya más index cuando sabemso que sólo hay dos */ {

//    let total = 0;

//    const { products, tax } = options; /* ✅ */
//    const { price } = Product ;

//    products.forEach( { price } => { /* ❌ iba con () */
//       total += price;
//    })

//    return [ total, total * tax ]; /* ✅ */
   
// }



// const shoppingCart = [phone, car];
// const tax = 0.15;


// const result = taxCalculation({
//    tax,
//    products: shoppingCart,
// });


// const [ tax, total ]: result[]; /* ❌ se pone en el mismo const del resultado */

// console.log('Total: ', );
// console.log('Tax: ', result[1]);



export {};