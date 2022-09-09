export class Pessoa {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    protected _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf;
  }
}

const p1 = new Pessoa('Marcela', 'Vieira', 24, '111.555.333-00');
p1.cpf = '111.555.333-23';
console.log(p1.cpf);
