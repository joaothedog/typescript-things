//Criar objetos sempre abertos

const objExample: {
  keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Valeu B',
};

console.log(objExample);

objExample.keyA = 'Another value';

console.log(objExample);
