// FACTORY FUNCTION

function createBox(radius) {
  return {
    radius,
    paint: () => {
      console.log('factorial function, paint');
    },
  };
}

const box = createBox(2);

box.paint();

/**
 **if the key and the value are same, we can remove value (radius)
 ** if you return an object, it's a factory object
 ** if we use this keyword along with new operator, we refer to that function as a constructor function
 */

// CONSTRUCTOR FUNCTION

function Box(radius) {
  this.radius = radius;
  this.paint = () => {
    console.log('constructor function, paint');
  };
}

const box1 = new Box();

box1.paint();
