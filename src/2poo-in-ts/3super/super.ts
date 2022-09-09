export class Pessoa {
  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    cpf: string,
    public classroom: string,
  ) {
    super(firstName, lastName, age, cpf);
  }

  getFullName(): string {
    console.log('Teste');
    const resultFullName = super.getFullName();
    return `${resultFullName}. Esse é o nome completo`;
  }
}

export class Cliente extends Pessoa {
  getFullName(): string {
    return `O nome desse cliente é: ${this.firstName} ${this.lastName}`;
  }
}

const student = new Aluno('João', 'Vitor', 21, '000.222.333-00', '14');
const client = new Cliente('Marcela', 'Vieira', 24, '111.555.333-00');

console.log(student);
console.log(client.getFullName());
