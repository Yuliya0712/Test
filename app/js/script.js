// let now = new Date();
// console.log(now);

// let s="Hello";
// let S=s.toUpperCase();
// console.log(s.toUpperCase());




// let delim = "&";

// let str = "Hello";
// console.log( str[0]);
// console.log( str.charCodeAt(0));

// let str2 = "second";
// let str3 = str +" "+delim+" "+ str2;
// let str4=`${str} ${delim} ${str2}`;
// console.log(str3);
// console.log(str4);


var str = "lorem ipsum is simply dummy";
str2 = str[0].toUpperCase();
let flag=false;
// console.log(str[0].toUpperCase());
let result = str[0].toUpperCase()+str.substring(1);

for (let i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    console.log("Ура,пробел");
    flag = true;
  } else {
    if (flag == true) {
      console.log(str[i].toUpperCase());
      flag = false;
    } else {
      console.log(str[i]);
    }
  }
}

console.log(result);