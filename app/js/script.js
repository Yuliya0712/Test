

// let obj1 = { name: "Serhii",age:30 }
// obj1.getName = function(){
//     alert(this.name+" "+this.age);
// }

// obj1.getName();


// let person = { name: "Serhii",
// age:30,
// getFullInfo = function(){
//     alert(this.name+" "+this.age);
// }
//  }
// person.getFullInfo();

function Student(name,age){
    this.name = name;
    this.age = age;
}

let stud1 = new Student("Alex",17);
let stud2 = new Student("Alex",18);

console.log(stud1.age+stud2.age);



// let i = 0;
// let j = 1;
// i = j;
// j = 2;
// // console.log(i);
// // console.log(j);
// let obj1 = { name: "Serhii",age:30 }
// delete obj1.name;

// if ('name' in obj1){
//     console.log(true);
// }else{
//     console.log(false);
// }

// let obj2 ={};

// for (let key in obj1 ){
//     obj2[key]=obj1[key];
// }

// for (let key in obj2 ){
//     console.log(obj2[key]);
// }

// let obj3 = Object.assign[{},obj2];

// for ( let key in obj3){
//     console.log(obj3[key]);
// }

// let obj4 = JSON.stringify(obj3);
// console.log(obj4);
// obj4 = JSON.parse(obj4)

// for ( let key in obj4){
//     console.log(obj4[key]);
// }


let students = [
  { name: "Nick", age: 25, group: "F1" },
  { name: "Ann", age: 25, group: "F2" },
  { name: "Ron", age: 25, group: "F2" },
  { name: "Lily", age: 25, group: "F1" },
];

for (let item of students) {
if (item.group=='F1') {
    console.log(item);
} else {
    // console.log(item);
}


//   for (let key in item) {
//     if (key == "group") {
//       if (item[key] == "F1") {
//         console.log(item[key]);
//       }
//     }
//   }
}
// console.log(arr[0]['name']+" "+arr[0].group);









// console.log(obj1);
// console.log(obj2);

// let i = 0;
// let arr = [
//   { "First name": "Ivan", age: 30, title: "Junior Dev" },
//   { "First name": "Alex", age: 30, title: "Middle Dev" },
//   { "First name": "Anna", age: 30, title: "Junior Dev" },
// ];
// console.log(arr[0]["First name"]+" "+arr[0].title+" " +arr[0].age);

// let obj = {'First name':'Ivan', age:30,title:'Junior Dev'};

// console.log(obj.age);
// let arg = 'age';
// arg = 'First name';

// console.log(obj[arg]);
