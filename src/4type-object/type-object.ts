//Criar objetos sempre abertos

const objExample: {
  readonly keyA: string; // Nao permite alteracao na chave
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Valeu B',
};

console.log(objExample);

objExample.keyB = 'Another value';

console.log(objExample);
