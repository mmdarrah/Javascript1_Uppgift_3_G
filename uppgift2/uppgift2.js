

let katet1 = prompt("Lägga till fårsta Katet.");
let katet2 = prompt("Lägga till andra Katet."); 


function pythagoras (){
let sum = Math.pow((Math.pow(katet1,2)+Math.pow(katet2,2)),0.5);
return("Hypotenusans längd i den rätvinklig triangel är " + sum.toFixed(0));

}  

alert(pythagoras());


