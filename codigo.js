console.log("Testeeeeeee");


function calculoIMC(){

    let altura, peso, imc;

    altura= parseFloat( document.getElementById("edtAltura").value);
    peso= parseFloat (document.getElementById("edtPeso").value);

    imc = peso/Math.pow(altura,2);
    imc = imc.toFixed(2);

    if(imc<=18.5){
        document.getElementById("resp").innerText = "Seu IMC: "+ imc + " Classificação : Abaixo do peso " ;
    } else if(imc<=24.9){
        document.getElementById("resp").innerText = "Seu IMC: "+ imc + " Classificação : Peso Ideal ";
    } else if(imc<=29.9){
        document.getElementById("resp").innerText = "Seu IMC: "+ imc + " Classificação : Levemente acima do Peso ";
    }else if(imc<=34.9){
        document.getElementById("resp").innerText = "Seu IMC: "+ imc + " Classificação : Obesidade grau I ";
    }else if(imc<=29.9){
        document.getElementById("resp").innerText = "Seu IMC: "+ imc + " Classificação : Obesidade grau III ";
    }else if(imc>40){
        document.getElementById("resp").innerText = "Seu IMC: "+ imc + " Classificação : Obesidade grau III ";
    }




}