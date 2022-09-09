export class Pessoa {
  static defaultAge = 0;
  static defaultCpf = '000.000.000-99';

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public cpf: string,
  ) {}

  normalMethod(): void {
    console.log(Pessoa.defaultAge, Pessoa.defaultCpf);
  }

  static createPessoa(firstName: string, lastName: string): Pessoa {
    return new Pessoa(
      firstName,
      lastName,
      Pessoa.defaultAge,
      Pessoa.defaultCpf,
    );
  }
}

const p1 = new Pessoa('Marcela', 'Vieira', 24, '111.555.333-00');
console.log(p1);
const p2 = Pessoa.createPessoa('Paula', 'Teixeira');
console.log(p2);
