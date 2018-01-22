function calcul () {
    var datainici=new Date(document.getElementById("datainici").value);
    var capital=document.getElementById("capital").value;
    var interes=document.getElementById("interes").value;
    var termini=document.getElementById("termini").value;

    console.log("datainici");
    console.log("capital");
    console.log("interes");
    console.log("termini");
    console.log("datainici");

}

function termini () {
    
}

//funcio per saber els mesos entre la data d'inici i la data final

function calculHipoteca (capital, interes) {
// hem de convertir a integer parseInt
var capital=parseInt(document.getElementById("capital"));
var interes=parseInt(document.getElementById("interes"));

quota=(capital*interes)/100*(1-Math.pow(1+(interes/100)), termini);
return quota;
}