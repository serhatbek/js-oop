let x = 20;
let y = x;
x = 14;

console.log(y);

/**
 **primitive types are copied by their values
 ** reference types are copied by their reference(by their place in memory)
 */

let num = { value: 6 };

const increase = (num) => {
  num.value++;
  console.log(num);
};

increase(num);
