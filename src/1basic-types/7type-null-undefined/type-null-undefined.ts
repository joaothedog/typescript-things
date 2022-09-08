export function createPerson( //abertura da funcao
  firstName: string,
  lastName?: string,
): {
  //type-annotation
  firstName: string;
  lastName?: string;
} {
  return {
    // retorno da funcao
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNum = squareOf(2);

if (squareOfTwoNum === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoNum);
}
