const box = {
  // object literals
  radius: 1,
  location: {
    x: 1, // properties
    y: 2, // properties
  },
  paint: () => {
    // method
    console.log('paint');
  },
};

box.paint();

/**
 **If an object has one or more methods, we say that object has behavior
 ** If an object has a method, it's better to use a factory or a constructor for cloning
 */
