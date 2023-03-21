// find area of a triangle

// create a prompt for sides of triangle
let side1 = prompt(`Enter the first side's length`);

let side2 = prompt(`Enter the second side's length`);

let side3 = prompt(`Enter the third side's length`);

// find a way to disqualify the largest number
const areaOfTri =
  (Number(side1) * Number(side2) * Number(side3)) /
  Math.max(Number(side1), Number(side2), Number(side3)) /
  2;

// log it

console.log(
  `The area of your triangle with the following lengths ( ${side1}, ${side2}, & ${side3} ) is: ${areaOfTri}`
);
