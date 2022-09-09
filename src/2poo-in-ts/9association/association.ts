export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever ou digitar sem ferramentas');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  abstract escrever(): void;
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`O escritor está utilizando a ferramenta ${this.nome} para escrever.`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`O escritor está utilizando a ferramenta ${this.nome} para digitar.`);
  }
}

const machadoDeAssis = new Escritor('Machado de Assis');

const f1 = new Caneta('caneta');
const f2 = new MaquinaEscrever('máquina de escrever');

// console.log(machadoDeAssis.nome);
// console.log(f1.nome);
// console.log(f2.nome);

machadoDeAssis.ferramenta = f1;
machadoDeAssis.escrever();
