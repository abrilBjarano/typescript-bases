import {Product, accountTotal} from './12-optimizacion-tarea-08';

const productsList: Product[] = [
   {
      name: 'maus',
      price: 230
   },
   {
      name: 'escritorio',
      price: 1200
   }
]

const [taxTotal, totalProducts, productsName, total] = accountTotal({ 
   products: productsList,
   tax: .15, 
});

console.log(`El total de los productos: ${ productsName } \nes de ${ totalProducts } con un total de tax de ${ taxTotal }.\nLo cual da un total de ${ total }`);