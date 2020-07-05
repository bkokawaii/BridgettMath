let getFactorial = num => {
  let newNum = 1;
  for (let i = num; i > 1; i--) {
    newNum = newNum * i;
  }
  return newNum;
};

const unless = (comMod, fn) => {
  if (!comMod) {
    fn();
  }
};

const getLcm = (com1, com2) => {
  if (com1 > 100 || com2 > 100 || com1 < 1 || com2 < 1) {
    console.log("Please enter a number between 1 and 100");
  } else {
    var multiples = [];
    for (let i = com1; i < 10000; i++) {
      unless(i % com1, () => {
        for (let j = com2; j < 10000; j++) {
          unless(i % com2, () => {
            if (i === j) {
              multiples.push(i);
            }
          });
        }
      });
    }
    return multiples[0];
  }
};

const square = side => side * side;

const squareRoot = operand => Math.sqrt(operand);

const hypotenuse = (aSqu, bSqu) => {
  let lengths = square(aSqu) + square(bSqu);
  return squareRoot(lengths);
};

const triangle = (base, height) => (base / 2) * height;

const add = (add1, add2) => add1 + add2;

const subtract = (sub1, sub2) => sub1 - sub2;

const multiply = (mult1, mult2) => mult1 * mult2;

const divide = (div1, div2) => div1 / div2;

const tip = (bill, percent) => {
  let workingPercent = percent * 0.01;
  return bill * workingPercent;
};

const fibonacci = nth => {
  var sequence = [];
  let newNum = 1;
  let preVnum = 0;
  let holdNum;
  for (let i = 0; i < nth; i++) {
    sequence.push(newNum);
    holdNum = newNum;
    newNum = preVnum + newNum;
    preVnum = holdNum;
  }
  return sequence;
};
