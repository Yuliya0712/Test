
let loremString =
 "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsum expedita autem excepturi eum ad facilis qui sequi voluptatem officia!";

function longestWord(str) {
    
  let arr = str.split(" ");
  let word = '';

  arr.forEach(function (item) {
    if (word.length < item.length) {
      word = item;
    }
  });

  return word;
  
}

console.log(longestWord(loremString));

let arrNum = [8, 6, 12, 10];
let doubles = arrNum.map(function(num) {
    return num ** 2;
});
console.log(doubles);
