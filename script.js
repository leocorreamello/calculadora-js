var resultado = document.getElementById("resultado");

function soma(){
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
    soma = n1 + n2;
    resultado.innerText = soma;
}
function sub(){
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
    sub = n1 - n2;
    resultado.innerText = sub;
}
function multi(){
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
    multi = n1 * n2;
    resultado.innerText = multi;
}
function divi(){
    var n1 = parseFloat(document.getElementById("numero1").value);
    var n2 = parseFloat(document.getElementById("numero2").value);
    divi = n1 / n2;
    resultado.innerText = divi;
}