function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  personName: 'João',
  lastname: 'Oliveira',

  showName(): void {
    console.log(this.personName + ' ' + this.lastname);
  },
};

noReturn('João', 'Pedro', 'Julia', 'Matheus');
person.showName();

export { person };
