
// Ett program som beräknas cirkels area och omkrets med radie input

let cirkelsRadie = prompt("Lägga till cirkels radie för att programmet beräkna\ncirkels omkrets och area.")

sumOfomkrets = function(){ // En fonktion som beräkna cirkels omkrets
let omkrets =  cirkelsRadie * 2 * 3.14
return ( "Cirkelns omkrets är " + omkrets.toFixed(1));
// OBS!! toFixed(1) för att bara ha en decimal
}
sumOfarea = function(){ // En fonktion som beräkna cirkels area
    let area =  3.14 * cirkelsRadie * cirkelsRadie
    return ("Och cirkelns area är " + area.toFixed(1));
// OBS!! toFixed(1) för att bara ha en decimal
}
alert(sumOfomkrets());
alert(sumOfarea());