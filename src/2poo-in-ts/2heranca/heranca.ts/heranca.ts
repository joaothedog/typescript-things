export class Pessoa {
  readonly firstName: string;
  readonly lastName: string;
  private readonly age: number;
  protected readonly cpf: string;

  constructor(firstName: string, lastName: string, age: number, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.cpf = cpf;
  }

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
  getFullName(): string {
    return `O nome desse aluno é: ${this.firstName} ${this.lastName}`;
  }
}

export class Cliente extends Pessoa {
  getFullName(): string {
    return `O nome desse cliente é: ${this.firstName} ${this.lastName}`;
  }
}

const student = new Aluno('João', 'Vitor', 21, '000.222.333-00');
const client = new Cliente('Marcela', 'Vieira', 24, '111.555.333-00');

console.log(student.getFullName());
console.log(client.getFullName());
