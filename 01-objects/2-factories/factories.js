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
 */
