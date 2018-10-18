

function Adress(gataAdress, postNummer, ort){
    this.gataAdress = gataAdress;
    this.postNummer = postNummer;
    this.ort = ort;
}
function Person (name, ePost, mobil, adress){
    this.name   = name;
    this.ePost  = ePost;
    this.mobil  = mobil;
    this.adress = adress;
        
    this.print = function(){
        console.log(`${this.name}\n${this.gataAdress}\n${this.postNummer}${" "}${this.ort}`);
                
    }
}

let mahmud = new Person ("Mahmud Al Hakim","mahmud.alhakim@alhakim.se","072123123",
new Adress("Hemfridsvägen 17","192 67","Sollentuna"));

mahmud.print();
