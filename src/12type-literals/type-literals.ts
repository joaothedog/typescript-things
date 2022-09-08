// Utilizar valores como tipos
// Criando, na maioria das vezes, com const

let x = 10; // infere number type
x = 0b1010;
const y = 10;
let a = 100 as const;
// a = 120;

const person = {
  fName: 'João' as const,
  lName: 'Oliveira',
};

// person.fName = 'Marcos'; // error
person.lName = 'Barros';

function pickColor(color: 'blue' | 'red' | 'green'): string {
  return color;
}

console.log(pickColor('red'));

// Module mode
export default 1;
