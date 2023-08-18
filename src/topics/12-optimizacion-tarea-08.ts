interface Product {
   name: string;
   price: number;
}

const billetera: Product = {
   name: 'Billetera Sailor Moon',
   price: 60
}

const audifonos: Product = {
name: 'Audifonos Realme',
   price: 1000
}

const compu: Product = {
name: 'Huawei Mate 13',
   price: 21000
}

const discoShakira: Product = {
name: 'Fijación Oral',
   price: 100
}

const productsList = [billetera, audifonos, compu, discoShakira];


interface AccountTotalOptions {
   products: Product[];
   tax: number;
}

function accountTotal(options: AccountTotalOptions): [number, number, string[], number] {

   let totalProducts = 0;

   const { products, tax } = options;

   const names: string[] = products.map( ({name}) => name );

   products.forEach( ({price}) => {
      totalProducts += price;
   });

   const taxRes = tax * totalProducts;

   return [taxRes, totalProducts, names, totalProducts + taxRes ];
}

const [taxTotal, totalProducts, productsName, total] = accountTotal({ 
   products: productsList,
   tax: .15, 
});

console.log(`El total de los productos: ${ productsName } \nes de ${ totalProducts } con un total de tax de ${ taxTotal }.\nLo cual da un total de ${ total }`);











export {};