export interface PessoaTipo {
  firstName: string;
  lastName: string;
  fullName: () => string;
};

interface PessoaTipo2 extends PessoaTipo {}

class Pessoa implements PessoaTipo2 {
  constructor(public firstName: string, public lastName: string) {}
  string: any;

  public fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p1 = new Pessoa('João', 'Vitor');
console.log(p1.fullName());
