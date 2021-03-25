let random =(min, max)=>Math.floor(Math.random() * (max - min + 1) ) + min;


let rnd=random(1,1000);
if (rmd %2) {
    console.log('четное');
    
} else {
    console.log('нечетное');
}

console.log(random(1,100));




// let isBigger = function (a,b) {
//     let res;
//     if (a>b) {
//       res= a; 
//     } else {
//         if (b>a)
//         res= b;
//     }else {
//         res= a;
//     }
//     return res;
// }
// // return (a>b)?a:b;
// console.log(isBigger(1,2));




// let sum=(a,b)=>a+b;

// console.log(sum(1,2));




// let askMeNextGeneration = function(question, yes, no) {
//     if (confirm(question)) 
//     yes (); 
//      else 
//      no();
// }
// askMeNextGeneration('Cогласен',showOk,showNo);

// // function getPriceProduct(price, sale = 0.1) {
// //   return price - price * sale;
// // }
// // console.log(getPriceProduct("product", 100, 0.1));

// function askMe(question, yes, no) {
//     if (confirm(question)) 
//     yes (); 
//      else 
//      no();
// }
// function showOk() {
//     console.log('ok')
// }
// function showNo() {
//     console.log('no');
// }
// askMe ('Cогласен',showOk,showNo);//функция коллбек
// f ('Cогласен',showOk,showNo);