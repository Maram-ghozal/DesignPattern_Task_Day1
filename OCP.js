class Shape {
  draw() {
    throw new Error("draw() must be implemented");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing a square");
  }
}

class Triangle extends Shape {
  draw() {
    console.log("Drawing a triangle");
  }
}

class ShapeDrawer {
  draw(shape) {
    shape.draw(); 
  }
}


const drawer = new ShapeDrawer();
drawer.draw(new Circle());
drawer.draw(new Square());
drawer.draw(new Triangle()); 