// tuple
const personData: [number, string] = [1, 'João'];
const personDataWithLastname: [number, string, string] = [2, 'Lara', 'Oliveira'];
const personDataOptLastName: [number, string, string?] = [1, 'João'];
const personDataWithRest: [number, string, ...string[]] = [1, 'Joao', 'Vitor', 'Oliveira', 'Batista'];


personData[0] = 100;
personData[1] = 'Márcia';

console.log(personData);
console.log(personDataWithLastname);
console.log(personDataOptLastName);
console.log(personDataWithRest);
