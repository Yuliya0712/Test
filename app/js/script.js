// let str='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non voluptatum dolorum, esse perspiciatis eaque?????';
// let arr = str.split(' ');

// function compareNum(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }
// let arr = [1, 2, 10];
// arr.sort(compareNum);
// console.log(arr);


// let arr = [1, 2, 3, 4, 5];
// let arg = prompt("Input number", "0");

// if (arg != null) {
//   searchElem(arg);
 
//   } else {
//   console.log("Cancel was pressed");
// }

// function searchElem(arg);
//  let res = arr.indexOf(+arg);
//   if (res == -1) {
//     console.log("Num not found");
//   } else {
//     console.log(res);
//   }


// let arr = [1, 2, 3, 4, 5];
// for (const iterator of arr) {
//   console.log(iterator);
// }

// let arr = ["html", "css", "javascript"];
// arr.forEach(function (item, i, arr) {
//   alert(i + ": " + item + " (массив:" + arr + ")");
// });

let arr = ['html', 'css', 'javascript'];
let nameLengths = arr.map((name) => name.length);
console.log(nameLengths);
