
function addNumbers( a: number, b: number): number {
   return a + b;
}

const addNumbersArrow = ( a: number, b: number ) => {
   return `${ a + b }`;
}

function multiply (firstNumber: number, secondNumber?: number, base: number = 2) {
   return firstNumber * base;
}

const result = addNumbers(11,29);
const result2 = addNumbersArrow(11,29);
const multiplyResult = multiply(10);


console.log({ result, result2, multiplyResult });













export {};