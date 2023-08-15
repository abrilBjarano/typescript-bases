// 📎 Array destructuing is made with []


const discosShakira: string[] = ['Pies', 'Ladrones', 'Fijación'];


/* Vanilla way ⬇️⬇️⬇️ */

console.log('Disco 3: ', discosShakira[2]);

// 📎 If an index doesn't exist within an array, try this ⬇️

console.log('Disco 3: ', discosShakira[3] || 'Index doesnt exist');





/* Vanilla different way ⏬ */ console.log('😱😱😱😱😱😱😱😱😱😱😱😱😱');


const amigos: string[] = ['eduardo', 'pau', 'andres', 'juan'];
const juan = amigos[4] || 'Theres no friend';
console.log('Amigo 3: ', juan);





/* Destructuring way ⬇️⬇️⬇️ */ console.log('🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒🦒');



const [bici1, bici2, bici3, bici4 = 'Not found']: string[] = ['fixie', 'ruta', 'monaña'];
const bicis: string[] = ['fixie', 'ruta', 'monaña'];

console.log('Bici 1 destructuring: ', bici1);
console.log('Bici 1 destructuring: ', bici4); /* will throw 'Not found'. index = '' in case of there's no index */
console.log('Bici 1 vanilla: ', bicis[0]);


/* EXAMPLES 🤓⏬ */ console.log('🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓🤓');


const [ date1, date2, date3 ]: number[] = [16, 5, 21];
console.log('Conoci a L un día', date1, ' de enero');

const [ , , c3]: string[] = ['m', 'b', 'l'];
console.log('The person I loved the most is ', c3);












export {};