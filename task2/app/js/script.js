
btn.setAttribute("value","checked");
console.log(btn.value);
console.log(btn.classList.toggle('text'));

for (let i = 1; i <= 5; i++ ){
let newLi = document.createElement('li');
newLi.innerHTML = [i];
list.appendChild(newLi);
}


