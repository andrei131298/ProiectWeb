function check(){       //functia prin care verific cu checkboxul datele introduse
    console.log(document.getElementById("gender").checked);
    console.log(document.getElementById("feminin").checked);
    var valid=1;
    if(numeUser.value =='') {   //testul de null al numelui
        document.getElementById('checknume').style.color="red";
        document.getElementById('checknume').innerHTML="Nume necompletat";
        valid=0;
    }
    else{   //daca eroarea a fost afisata o data, sa fie stearsa in caz de rescrie o valoare corecta in input
        document.getElementById('checknume').innerHTML="";
    }
    if(prenumeUser.value ==''){     ////testul de null al prenumelui
        document.getElementById('checkprenume').style.color="red";
        document.getElementById('checkprenume').innerHTML="Prenume necompletat";
        valid=0;
    }
    else{
        document.getElementById('checkprenume').innerHTML="";
    }
    if(email.value ==''){   //testul de null al emailului
        document.getElementById('checkemail').style.color="red";
        document.getElementById('checkemail').innerHTML="Email necompletat";
        valid=0;
    }
    else{
        document.getElementById('checkemail').innerHTML="";
    }
    if(!email.value){}
    else{   //intra pe else daca este scris ceva
        re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!re.test(email.value)) {                                                 //verifica daca emailul are caractere inaintea si dupa "@" si daca are un
            document.getElementById('checkemail').style.color="red";      // domeniu la final format din "." si apoi intre 2 si 3 caractere
            document.getElementById('checkemail').innerHTML="Email invalid";
            valid=0;
        }
        else{
            document.getElementById('checkemail').innerHTML="";
        }
    }
    if(parola.value ==''){  //testul de null al parolei
        document.getElementById('checkparola').style.color="red";
        document.getElementById('checkparola').innerHTML="Parola necompletata";
        valid=0;
    }
    else{
        document.getElementById('checkparola').innerHTML="";
    }
    document.getElementById('checkparola2').innerHTML="";
    if(parola.value.length>=1) {
        if (parola.value.length < 6 || parola.value.length > 15) {  //verifica ca lungimea parolei sa aiba intre 6 si 15 caractere
            document.getElementById('checkparola2').style.color = "red";
            document.getElementById('checkparola2').innerHTML += "Parola trebuie sa aiba intre 6 si 15 caractere";
            valid=0;
        }

        re = /[0-9]/;
        if (!re.test(parola.value)) {   //verifica ca parola sa aiba o cifra sau un numar
            document.getElementById('checkparola2').style.color = "red";
            document.getElementById('checkparola2').innerHTML += "<br>" + "Parola trebuie sa aiba o cifra sau un numar";
            cvalid=0;
        }

        re = /[a-z]/;
        if (!re.test(parola.value)) {   //verifica ca parola sa aiba macar o litera mica
            document.getElementById('checkparola2').style.color = "red";
            document.getElementById('checkparola2').innerHTML += "<br>" + "Parola trebuie sa aiba macar o litera mica";
            valid=0;
        }

        re = /[A-Z]/;
        if (!re.test(parola.value)) {   //verifica ca parola sa aiba macar o litera mare
            document.getElementById('checkparola2').style.color = "red";
            document.getElementById('checkparola2').innerHTML += "<br>" + "Parola trebuie sa aiba macar o litera mare";
            valid=0;
        }
    }
    if(document.getElementById("gender").checked == false && document.getElementById("feminin").checked == false){     //verifica daca sexul a fost selectat
        document.getElementById('checkgen').style.color="red";
        document.getElementById('checkgen').innerHTML="Gen neselectat";
        valid=0;
    }
    else {
        document.getElementById('checkgen').innerHTML = "";
    }
    if(nivel.value == ''){  //verifica daca nivelul a fost selectat
        document.getElementById('checknivel').style.color="red";
        document.getElementById('checknivel').innerHTML="Nivel neselectat";
        valid=0;
    }
    else {
        document.getElementById('checknivel').innerHTML = "";
    }
    if(valid==1) {  //daca trece toate testele, apare un mesaj de comfirmare
        var node = document.createElement("p");
        var textnode = document.createTextNode("Ai introdus date corecte");
        node.style.color="green";
        node.appendChild(textnode);
        document.getElementById("checknivel").appendChild(node);
    }

}
