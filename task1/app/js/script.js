
let movElem = document.getElementById('box');
document.onclick = function getCoords(e){
    movElem.style.left = e.clientX + "px";
    movElem.style.top = e.clientY  + "px";

}

