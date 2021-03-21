function Evaluate(a) {
  if (a > 0 || !(a < 10)) {
    c = a + b * 3;
  } else if (a < 0) {
    c = a ** 2 + b * 2;
  } else {
    c = a * 2 + b * 4;
  }
  return c;
}

let a = 0;
let b = 2;
let c = 0;

a = prompt("input your digit", "0");
if (a != null) {
  console.log("ok was pressed");
  a = parseInt(a);
  c = Evaluate(a);
} else {
  console.log("cancel was pressed");
}

console.log(c);
// // c++;
// // console.log(c);

// let n =(a > 0) ? a+b: a*b;
// console.log(n);

// let a=2+2;
// switch (a) {
//     case 1:
//     alert('a');
//     break;
//     case 2:
//     alert('b');
//     break;
//     case 3:
//     alert('c');
//     break;
//     default:
//     alert('z');
//     break;
// }

// for (let i = 9; i > 1; i--) {

//   console.log(i**2);
// }
