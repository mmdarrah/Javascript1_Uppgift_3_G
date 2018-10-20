/*Ett program där man kan lägga till person information och det finns metod i programet där kan man 
anropa person information i svenskt format*/


/* Kontraktur Objekt som innehåller personliga information och print metod och
adress är också en Object inom Person Objekt
*/ 
function Person (name, ePost, mobil, adress){ 
    this.name   = name;
    this.ePost  = ePost;
    this.mobil  = mobil;
    this.adress = adress;
    
    this.print = function(){//OBS!! this.adress.gataAdress så man öppna adress fårst sedan öppna gataAdress.
        console.log(`${this.name}\n\n${this.adress.gataAdress}\n${this.adress.postNummer}${" "}${this.adress.ort}`);
        
    }
}
        function Adress(gataAdress, postNummer, ort){
            this.gataAdress = gataAdress;
            this.postNummer = postNummer;
            this.ort = ort;
        }

//Lägga till information inom Objekt. 

let mahmud = new Person ("Mahmud Al Hakim","mahmud.alhakim@alhakim.se","072123123",
new Adress("Hemfridsvägen 17","192 67","Sollentuna"));
//OBS!! new Adress för att lägga till information inom Adress Objekt.
let maher = new Person ("Maher Darrah","maher.darrah@darrah.se","072456521",
new Adress("Brunsgata 25","111 38","Stockholm"));

mahmud.print();

//maher.print();
