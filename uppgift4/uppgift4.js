
/* Ett program som beräknar volymen och arean av en sfär */ 

// Programmet använder Prompt för att samla data  
let sfärsRadie = prompt("Lägga till  sfärs radie för att programmet beräkna\nsfärens volymen och arean.")

sumOfvolym = function(){ // En funktion som beräkna sfärens volym
let volym =  (4 * 3.14 * Math.pow(sfärsRadie,3) / 3)
return ( "Sfärens volym är " + volym.toFixed(2));
// OBS!! toFixed(2) för att bara ha två decimal
}
sumOfarea = function(){ // En funktion som beräkna sfärens area
    let area =  4 * 3.14 * Math.pow(sfärsRadie,2) 
    return ("Och sfärens area är " + area.toFixed(2));
// OBS!! toFixed(2) för att bara ha två decimal
}
alert(sumOfvolym());
alert(sumOfarea());