"use strict";

class Car {
  constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = price;
  }

  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
    );
  }

  get price() {
    return this._price;
  }

  set price(value) {
    // this._price = this._price * (1 - value / 100);  - удешевление цены на value %
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    this.speed =
      this.speed + value < this.maxSpeed ? this.speed + value : this.maxSpeed;
  }

  decelerate(value) {
    this.speed = this.speed - value > 0 ? this.speed - value : 0;
  }

  drive(hours) {
    this.distance += hours * this.speed;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
