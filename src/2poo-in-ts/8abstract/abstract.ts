export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected nickname: string,
    protected atk: number,
    protected hp: number,
  ) {}

  attackAction(character: Character): void {
    this.roarAttack();
    character.loseHp(this.atk);
    character.roarDefense();
  }

  loseHp(atkForce: number): void {
    this.hp -= atkForce;
    console.log(`${this.nickname} agora tem ${this.hp} de vida!`);
  }

  abstract roarAttack(): void;

  abstract roarDefense(): void;
}

export class Sacerdote extends Character {
  protected emoji = '\u{1F9DD}';

  roarAttack(): void {
    console.log(`${this.nickname} ${this.emoji}: Yaaah...`);
  }

  roarDefense(): void {
    console.log(`${this.nickname} ${this.emoji}: Urrrh...\n`);
  }
}
export class Creature extends Character {
  protected emoji = '\u{1F9DF}';

  roarAttack(): void {
    console.log(`${this.nickname} ${this.emoji}: Roaaaaaar...`);
  }
  roarDefense(): void {
    console.log(`${this.nickname} ${this.emoji}: Arghhh...\n`);
  }
}

const trybryanChar = new Sacerdote('Trybryan', 100, 1000);
const fogoFatuo = new Creature('Fogo Fátuo', 29, 500);

trybryanChar.attackAction(fogoFatuo);
trybryanChar.attackAction(fogoFatuo);
trybryanChar.attackAction(fogoFatuo);
fogoFatuo.attackAction(trybryanChar);
fogoFatuo.attackAction(trybryanChar);
fogoFatuo.attackAction(trybryanChar);
