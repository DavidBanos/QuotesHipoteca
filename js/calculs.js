function calcul () {
    var datainici=new Date(document.getElementById("datainici").value);
    var capital=parseInt(document.getElementById("capital").value);
    var interes=parseInt(document.getElementById("interes").value);
    var termini=parseInt(document.getElementById("termini").value);
    var fi=datafi(datainici);
    
    
}

//Funció per tractament d'errors. Volem que l'usuari ens introdueixi una data no inferior a la data actual i que el primer dia per al càlcul de la hipoteca sigui dia 1 de cada mes.

function errors () {
    var datainici=new Date(document.getElementById("datainici").value);
    var datainicierrors=document.getElementById("datainici").value;
    
    if (datainici<new Date()){
        alert("La data de la primera quota no pot ser inferior a la data d'avui.");
        return false;
    }
    if (datainicierrors.substring(8,11)!="01"){
        alert("La data ha de ser el primer dia de cada mes.");
        return false;
    }
    return true;
    
}


//Funció per saber quin dia acabarem de pagar la hipoteca.
function datafi () {
    var datainici=new Date(document.getElementById("datainici").value);
    var termini=parseInt(document.getElementById("termini").value);
    var datafi=datainici;
    datafi.setFullYear(datafi.getFullYear()+termini);
    return datafi;
}

//Funció per calcular la quota de la hipoteca.
function calculHipoteca () {
    // hem de convertir a integer amb un parseInt
    var capital=parseInt(document.getElementById("capital").value);
    var interes=parseInt(document.getElementById("interes").value);
    var termini=parseInt(document.getElementById("termini").value);
    var datafinal=datafi();
    
    if (errors()) {
        quota=((capital*interes)/100*(1-Math.pow(1+(interes/100)), termini))/12;
        
        //Aquest és el missatge que apareix quan l'usuari fa clic a "enviar". Es calcula la quota de la hipoteca i quan s'acabarà de pagar. Aquest resultat apareix en un "div" a la pàgina web index.
        
        document.getElementById("resultat").innerHTML = "La data de l'última quota de la teva hipoteca serà el dia "+datafinal.getDate()+"/"+datafinal.getMonth()+"/"+datafinal.getFullYear()+ " i la quota de la teva hipoteca serà de "+quota.toFixed(2)+ " €.";    
    } 
    return false;
    
    
}