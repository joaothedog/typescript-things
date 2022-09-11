export class Car {
  private readonly motor = new Motor();

  turnOn(): void {
    this.motor.turnOn();
  }
  speedUp(): void {
    this.motor.speedUp();
  }
  turnOff(): void {
    this.motor.turnOff();
  }
}

export class Motor {
  turnOn(): void {
    console.log('O motor está ligado');
  }
  speedUp(): void {
    console.log('Acelerando o carro');
  }
  turnOff(): void {
    console.log('O motor está desligado');
  }
}

const car = new Car();
car.speedUp();
