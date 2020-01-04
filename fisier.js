var data = null;

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


//creez variabilele prin care sa iau valoarea inputurilior din formular
var numeUser=document.getElementById("numeUser");
var prenumeUser=document.getElementById("prenumeUser");
var email=document.getElementById("email");
var parola=document.getElementById("parola");
var varsta=document.getElementById("rangeinput");
var gen = document.getElementById("gender");
var nivel=document.getElementById("exampleFormControlSelect1");


var xhr = new XMLHttpRequest();

// Apelul este async, ceea ce inseamna ca dureaza pana ne raspunde serverul (de la cateva milisecunde la cateva zeci de secunde).
// Functiona onload se activeaza cand primim un raspuns de la server.
xhr.onload = function () {

    // In xhr.status aflam ce status-code are cererea noastra. In general cele cu 200 sunt bune, iar cele cu 400 si 500 sunt rele.
    if (xhr.status >= 200 && xhr.status < 300) {
        // Daca request-ul a fost facut cu succes
        console.log('success!', xhr);
        console.log("raspunsul pe care il primim este sub forma de string",xhr.response);
        console.log("De cele mai multe ori vrem sa convertim raspunsul la obiect JSON ca sa putem utiliza datele",JSON.parse(xhr.response))
        data=JSON.parse(xhr.response);
    } else {
        // Daca avem FAIL (ex: nu exista metoda din backend pe care vrem sa o apelam sau nu avem conexiune la internet etc)
        console.log('The request failed!');
    }
};

//Acum ca am definit metoda xhr.onload putem sa facem un request de tip GET catre jsonplacehoder
xhr.open('GET', 'http://localhost:3000/users');
xhr.send();


var buton=document.getElementById("submit");
buton.addEventListener("click",function() {
        if(numeUser.value ==''){    //testul de null al numelui
            Swal.fire({
                icon: 'error',
                title: 'Nume',
                text: 'Completeaza numele'
            })
            numeUser.focus();
            return;
        }
        if(prenumeUser.value ==''){     //testul de null al prenumelui
            Swal.fire({
                icon: 'error',
                title: 'Prenume',
                text: 'Completeaza prenumele'
            })
            prenumeUser.focus();
            return;
        }
        if(email.value ==''){       //testul de null al emailului
            Swal.fire({
                icon: 'error',
                title: 'Email',
                text: 'Completeaza emailul'
            })
            email.focus();
            return;
        }

        re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!re.test(email.value)) {     //verifica daca emailul are caractere inaintea si dupa "@" si daca are un
            Swal.fire({                 // domeniu la final format din "." si apoi intre 2 si 3 caractere
                icon: 'error',
                title: 'Email',
                text: 'Completeaza un email valid'
            })
            email.focus();
            return;
        }

        if(parola.value ==''){      //testul de null al parolei
            Swal.fire({
                icon: 'error',
                title: 'Parola',
                text: 'Completeaza parola'
            })
            parola.focus();
            return;
        }

        if(parola.value.length < 6 || parola.value.length > 15) {   //verifica ca lungimea parolei sa aiba intre 6 si 15 caractere
            Swal.fire({
                icon: 'error',
                title: 'Parola',
                text: 'Parola trebuie sa aiba intre 6 si 15 caractere'
            })
            parola.focus();
            return;
        }
        re = /[0-9]/;
        if(!re.test(parola.value)) {    //verifica ca parola sa aiba o cifra sau un numar
            Swal.fire({
                icon: 'error',
                title: 'Parola',
                text: 'Parola trebuie sa aiba o cifra sau un numar'
            })
            parola.focus();
            return;
        }
        re = /[a-z]/;
        if(!re.test(parola.value)) {    //verifica ca parola sa aiba macar o litera mica
            Swal.fire({
                icon: 'error',
                title: 'Parola',
                text: 'Parola trebuie sa aiba macar o litera mica'
            })
            parola.focus();
            return;
        }
        re = /[A-Z]/;
        if(!re.test(parola.value)) {    //verifica ca parola sa aiba macar o litera mare
            Swal.fire({
                icon: 'error',
                title: 'Parola',
                text: 'Parola trebuie sa aiba macar o litera mare'
            })
            parola.focus();
            return;
        }

        if(document.getElementById("gender").checked == false){     //verifica daca sexul nu a fost selectat
            Swal.fire({
                icon: 'error',
                title: 'Gen',
                text: 'Completeaza genul'
            })
            gen.focus();
            return;
        }

        if(nivel.value == ''){      //verifica daca nivelul a fost selectat
            Swal.fire({
                icon: 'error',
                title: 'Nivel',
                text: 'Alege un nivel'
            })
            nivel.focus();
            return;
        }
        var valid=0;
        data.forEach(function(elem) {   //verifica daca parola sau emailul au mai fost folosite de catre alt user
            if (parola.value == elem.parola || email.value == elem.email) {
                Swal.fire({
                    icon: 'error',
                    title: 'Parola sau email',
                    text: 'Parola sau email deja existent'
                })
                valid=1;
                return;
            }
        });
        if(valid == 0) {    //daca trece toate testele, il adauga la useri
            var feed = {
                "nume": numeUser.value,
                "prenume": prenumeUser.value,
                "email": email.value,
                "parola": parola.value,
                "gen": gen.value,
                "varsta": varsta.value,
                "nivel": nivel.value
            };
            data.push(feed);
            Swal.fire({
                icon: 'success',
                title: 'Inregistrare cu succes!'
            })
            console.log(data);
        }
});
