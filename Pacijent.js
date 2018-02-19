
class Pacijent {
    constructor(ime, prezime, jmbg, brojKartona) {
        this.ime = ime;
        this.prezime = prezime;
        this.jmbg = jmbg;
        this.brojKartona = brojKartona;
        this.izabraniLekar = null;
        this.zakazaniPregledi = [];

        //logovanje kreiranog pacijenta
        let now = moment().format("L hh:mm");
        console.log("[" + now + "]"  + " Kreiran pacijent " + ime);
    }
    
    izaberiLekara(doktor) {
        this.izabraniLekar = doktor;
        doktor.dodajPacijenta(this);

        //logovanje izabranog lekara
        let now = moment().format("L hh:mm");
        console.log("[" + now + "]"  + " Pacijent " + this.ime + " bira lekara " + doktor.ime);
    }

    obaviPregled() {
        if(this.zakazaniPregledi.length > 0) {
            var pregled = this.zakazaniPregledi.pop();
            pregled.obaviPregled();
        }
    }

}
