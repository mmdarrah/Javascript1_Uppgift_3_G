

function Person (name, ePost, mobil, adress){
    
    this.name   = name;
    this.ePost  = ePost;
    this.mobil  = mobil;

    this.adress = adress;
    this.adress = new function Adress(gataAdress, postNummer, ort){
        this.gataAdress = gataAdress;
        this.postNummer = postNummer;
        this.ort = ort;
    }
    this.print = function(){
        console.log(name);
        console.log(gataAdress );
        console.log(+ postNummer +" " + ort);
              
    }
    
}

let mahmud = new Person ("Mahmud Al Hakim", "mahmud.alhakim@alhakim.se", "072123123" );
let mahmudAdress = new Adress ("Hemfridsvägen 17", "192 67", "Sollentuna");

mahmud.print();