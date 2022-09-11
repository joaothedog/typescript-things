type PessoaTipo = {
  firstName: string;
  lastName: string;
  fullName: () => string;
};

class Pessoa implements PessoaTipo {
  constructor(public firstName: string, public lastName: string) {}
  string: any;

  public fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p1 = new Pessoa('João', 'Vitor');
console.log(p1.fullName());
