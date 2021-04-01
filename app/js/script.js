// let array = [1, 'sum', 3];
// let sum=0;

// for (let i=array.length-1; i >=0; i--) {
    // sum+=array[i];//sum=sum+array[i]
    // console.log(array[i]);

// }


// let array = [1, 2, 3];
// let arr= new Array(1,2,3);
// let mas=[];
// let alt = new Array(5);

// let matrix=[
//     [1,2,3,0],
//     [4,5,6],
//     [7,8,9],
// ];
// console.log(matrix[1][1]);
// let sum=0;

// for (let i=0;i<matrix.length; i++) {
//    for (let j=0;j<matrix[i].length;j++)
//    {
//     console.log(matrix[i][j]);
//     sum+=matrix[i][j];
// }
// }
// console.log(sum);

//  let users = [];
//  for (let i = 0; 1; i++) {
//    let str = prompt("Input your name", "");
//    if (str == null) {
//      console.log("cancel was pressed");
//      break;
//    } else {
//      users.push(str);
//    }
//  }
//  console.log(users);

let str='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus non voluptatum dolorum, esse perspiciatis eaque?????';
let words = str.split(' ');


for (let i = 0; i < words.length; i++) {
  let tmp = words[i];
  let word = "";
  for (let j = 0; j < tmp.length; j++) {
    if (tmp[j] == "," || tmp[j] == "." || tmp[j] == "?") {
      continue;
    }

    word += tmp[j];
  }
  if (word.length > 5) {
    console.log(word);
  }
}
console.log(words);