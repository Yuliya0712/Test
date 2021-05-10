let recipeMap = new Map ([
    [ "Огурец", 500],
    [ "Помидор", 350],
    [ "Лук", 50]
    ])

for (let item of recipeMap.entries()){
console.log(item);
}


// let map = new Map();
// map.set("1","first string");
// map.set("2","second string");
// map.set("3","fird string");

// console.log(map.get('1'));
// console.log(map.get('2'));
// console.log(map.get('3'));
// console.log(map.get(true));
// console.log(map.size);



// let arr  = ["Ivan","Fox","junior","23"];
// let  [firstName, lastName,...info] = arr;
// let str = `имя: ${firstName} ${lastName}`;
// console.log(str);



// let inc = function(x) {return x+1;}
// let inc2 = x => x+1;
// let sum = (a,b) => a + b;

// console.log(sum(1,2)); 

// let func = (num1, num2 = 2) => num1 % num2;
// console.log(func(3));


// let arr  = ["Ivan","Fox","junior","23"];
// let  [firstName, lastName,...info] = arr;
// // let obj = {name:"Ivan", lastName: "Fox"};
// // let{name, lastName} = obj;

// console.log(firstName);
// console.log(lastName);
// console.log(info);
// // firstName = "Alex";
// // console.log(name);


// let log = function(a,b,c){
//     console.log(a,b,c);
// }
// log(...arr);

// let log2 = function(a,b,...rest){
//     console.log(a,b,rest);
// }
// log2("Ivan","Fox","junior","23");