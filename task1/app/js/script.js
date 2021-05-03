let collectionElements = document.getElementsByClassName("list");
console.log(collectionElements);
for (i = 0; i < 1; i++) {
  if (searchingElem = collectionElements[i]) {
    console.log(searchingElem.nodeName);
  }
}

let list = document.querySelectorAll("ul>li:last-child");
for (let item of list) {
  console.log(item.innerHTML);
  item.innerHTML = "CSS3";
}

let divElements = document.getElementsByTagName("div");
console.log(divElements);
for (i = 0; i < divElements.length; i++) {
  console.log(divElements[i].innerHTML);
  divElements[i].style.color = "red";
}
