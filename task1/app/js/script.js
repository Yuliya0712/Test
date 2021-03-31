let str = "lorem ipsum is simply dummy";
let strFormatted = "";

for (let i = 0; i < str.length; i++) {
  if (i == 0) {
    strFormatted += str[i].toUpperCase();
    continue;
  }

  if (str[i] == " ") {
    strFormatted += str[i];
    continue;
  }

  if (str[i - 1] == " ") {
    strFormatted += str[i].toUpperCase();
    continue;
  }

  strFormatted += str[i];
}

console.log(strFormatted);


let longStr = '1234';
let shortStr = '123';

console.log(getBiggerStr(longStr, shortStr));

function getBiggerStr(str1, str2) {
   if (str1.length > str2.length){
     return str1;
   }
  return str2;
}