export class Enterprise {
  public readonly entName: string;
  protected readonly collaboratorsArray: Collaborator[] = [];
  private readonly cnpj: string;

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

export class Expert extends Enterprise {
  constructor() {
    super('Udemy', '11122-2222.333');
  }

  popCollab(): Collaborator | null {
    const collaborator = this.collaboratorsArray.pop();
    if (collaborator) return collaborator;
    return null;
  }
}

export class Collaborator {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
  ) {}
}

const enterpise1 = new Expert();
const collab1 = new Collaborator('João', 'Oliveira');
const collab2 = new Collaborator('Maria', 'Marcelina');
const collab3 = new Collaborator('Pedro', 'Vieira');
enterpise1.addCollab(collab1);
enterpise1.addCollab(collab2);
enterpise1.addCollab(collab3);

const removedCollaborator = enterpise1.popCollab();

console.log(removedCollaborator);
console.log(enterpise1);




// enterpise1.entName = 'Macros'; // Read-only
