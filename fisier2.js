//creez un ceas care sa isi schimbe ora din secunda in secunda
var ceas=document.createElement("p");
ceas.style.fontSize="200%";
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    var bod=document.body.appendChild(ceas);
    bod.innerHTML = d.toLocaleTimeString();
}