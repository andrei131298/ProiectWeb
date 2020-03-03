//creez un ceas care sa isi schimbe ora din secunda in secunda
var ceas=document.createElement("p");
ceas.style.fontSize="200%";
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    var bod=document.body.appendChild(ceas);
    bod.innerHTML = d.toLocaleTimeString();
}

function arataVarstaInRange() {         //arata varsta selectata pe range input
    var fP = document.getElementById('rangeinp').innerHTML;
}

var refreshIntervalId=setInterval(function () {     //creaza o culoare random pentru fundal
    var randomColor = Math.floor(Math.random()*1677721).toString(16);
    document.getElementById("cont").style.backgroundColor = "#"+randomColor;
},1000);       //schimba culoarea la fiecare secunda trecuta

var btn = document.createElement("button");
btn.innerHTML = "Vreau culoarea asta";
document.getElementById("cont").appendChild(btn);
btn.onclick=function(){     //la apasarea butonului se opreste schimbarea culorii
    clearInterval(refreshIntervalId);
}