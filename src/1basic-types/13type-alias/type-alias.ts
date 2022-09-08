type Age = number;
type Person = {
  firstName: string;
  age: Age;
  salary: number;
  favColor?: string;
};

type ColorsRGB = 'Vermelho' | 'Verde' | 'Azul';
type ColorsCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type FavColor = ColorsRGB | ColorsCMYK;

const person: Person = {
  age: 21,
  firstName: 'João Vitor',
  salary: 200_000, // 200000 é possível separar por underlines
};

export function setFavColor(person: Person, color: FavColor): Person {
  return { ...person, favColor: color };
}

console.log(setFavColor(person, 'Preto'));
console.log(person);

// Module mode
export default 1;
