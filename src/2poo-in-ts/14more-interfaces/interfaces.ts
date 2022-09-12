export interface Person {
  firstName: string;
}

export interface Person {
  lastName: string;
}

export interface Person {
  readonly adresses: readonly string[];
}

export interface Person {
  age?: number; // OPTIONAL
}

const person: Person = {
  firstName: 'João',
  lastName: 'Oliveira',
  adresses: ['Av. 135'],
};

console.log(person);
