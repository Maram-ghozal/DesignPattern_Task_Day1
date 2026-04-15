class Vehicle {
  move() {
    console.log("Vehicle is moving");
  }
}

class EngineVehicle extends Vehicle {
  startEngine() {
    console.log("Engine started");
  }
}

class NonEngineVehicle extends Vehicle {
  pedal() {
    console.log("Pedaling...");
  }
}

class Car extends EngineVehicle {
  move() {
    this.startEngine();
    console.log("Car is driving");
  }
}

class Bicycle extends NonEngineVehicle {
  move() {
    this.pedal();
    console.log("Bicycle is riding");
  }
}


const vehicles = [new Car(), new Bicycle()];
vehicles.forEach(v => v.move());