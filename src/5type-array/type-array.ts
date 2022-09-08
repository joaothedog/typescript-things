// Array<T> or T[] ----- T === type
function multArgs(...args: number[]): number {
  return args.reduce((ac, val) => ac * val, 1);
}

function concatStrings(...args: string[]): string {
  return args.reduce((ac, val) => ac + val, '');
}

export function toLowerCase(...args: string[]): string[] {
  return args.map((val) => val.toLowerCase());
}

const multResult = multArgs(1, 2, 3);
const concatResult = concatStrings('A', 'B', 'C');
const lowerCase = toLowerCase('A', 'B', 'C');

console.log(concatResult);
console.log(multResult);
console.log(lowerCase);
