// Tipos mais primitivos

let personName: string = 'João';
let age: number = 21;
let adult: boolean = true;
let symbol: symbol = Symbol('simbolo-qualquer');

// Passados por referencias ( Arrays e Objetos )
//ARRAY
let numberArray: Array<number> = [1, 2, 3];
let stringArray: Array<string> = ['a', 'b', 'c'];
// Ou podemos fazer desse jeito
let numberArrayOther: number[] = [1, 2, 3];
let stringArrayOther: string[] = ['a', 'b', 'c'];

//OBJETOS
let person: { personName: string; age: number; adult?: boolean } = {
  age: 21,
  personName: 'João Vitor',
  adult: true,
};

console.log(person);

//FUNCTIONS
function sum(x: number, y: number): number {
  return x + y;
}

const sumOther: (x: number, y: number) => number = (x, y) => x + y;
