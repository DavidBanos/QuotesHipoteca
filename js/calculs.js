function calcul () {
    var datainici=new Date(document.getElementById("datainici").value);
    var capital=parseInt(document.getElementById("capital").value);
    var interes=parseInt(document.getElementById("interes").value);
    var termini=parseInt(document.getElementById("termini").value);
    var fi=datafi(datainici);

    //Finestra que ens mostra el resultat del càlcul de la hipoteca i els valors introduïts per l'usuari.
    alert ("La data d'inici de la teva hipoteca és: "+datainici+ "\n"
    +"El capital de la teva hipoteca és: "+capital+ "\n"
    +"L'interès de la teva hipoteca és: "+interes+ "\n"
    +"El termini de la teva hipoteca és: "+termini+ "\n"
    +"Amb les dades introduïdes, la quota de la teva hipoteca serà de "+calculHipoteca(capital, interes)+ 
    " i l'última quota serà el dia "+fi);
    
    /*
    console.log(datainici);
    console.log(capital);
    console.log(interes);
    console.log(termini);
    console.log(calculHipoteca(capital, interes));
    console.log(datafi(datainici));
    */

}


//Funció per saber quin dia acabarem de pagar la hipoteca.
function datafi (datainici) {
    var datainici=new Date(document.getElementById("datainici").value);
    var termini=parseInt(document.getElementById("termini").value);
    var datafi=datainici;
    datafi.setFullYear(datafi.getFullYear()+termini);
    return datafi;
}

//Funció per calcular la quota de la hipoteca.
function calculHipoteca (capital, interes) {
    // hem de convertir a integer amb un parseInt
    var capital=parseInt(document.getElementById("capital").value);
    var interes=parseInt(document.getElementById("interes").value);
    var termini=parseInt(document.getElementById("termini").value);
    
    quota=((capital*interes)/100*(1-Math.pow(1+(interes/100)), termini))/12;
    return quota;
}