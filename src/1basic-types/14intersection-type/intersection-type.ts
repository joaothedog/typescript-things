type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';

const person: Pessoa = {
  nome: 'João',
  sobrenome: 'Oliveira',
  idade: 30,
};

console.log(person);

// Module mode
export { person };
