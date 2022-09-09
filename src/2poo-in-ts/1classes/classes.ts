export class Enterprise {
  public readonly entName: string;
  private readonly collaboratorsArray: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(entName: string, cnpj: string) {
    this.entName = entName;
    this.cnpj = cnpj;
  }

  addCollab(collaborator: Collaborator): void {
    this.collaboratorsArray.push(collaborator);
  }

  showCollab(): void {
    for (const colaborador of this.collaboratorsArray) {
      console.log(colaborador);
    }
  }
}

export class Collaborator {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
  ) {}
}

const enterpise1 = new Enterprise('Expert', '0000900-9');
const collab1 = new Collaborator('João', 'Oliveira');
const collab2 = new Collaborator('Maria', 'Marcelina');
const collab3 = new Collaborator('Pedro', 'Vieira');
enterpise1.addCollab(collab1);
enterpise1.addCollab(collab2);
enterpise1.addCollab(collab3);

console.log(enterpise1);

enterpise1.showCollab();
// enterpise1.entName = 'Macros'; // Read-only
