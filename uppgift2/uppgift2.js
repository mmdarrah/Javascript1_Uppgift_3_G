
/*Ett program som använda Pythagoras sats för att beräkna
 hypotenusans längd i en rätvinklig triangel.*/
 

/* Programmet använder Prompt för att samla data  */
let katet1 = prompt("Lägga till fårsta Katet.");
let katet2 = prompt("Lägga till andra Katet."); 


function pythagoras (){
    // Pythagoras sats a2+b2=c2
let sum = Math.pow((Math.pow(katet1,2)+Math.pow(katet2,2)),0.5);
return("Hypotenusans längd i den rätvinklig triangel är " + sum.toFixed(0));

}  
// funktion anropa
alert(pythagoras());


