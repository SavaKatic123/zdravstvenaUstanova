
class Doktor {
    constructor(ime, prezime, specijalnost) {
        this.ime = ime;
        this.prezime = prezime;
        this.specijalnost = specijalnost;
        this.pacijenti = [];

        //logovanje kreiranog doktora
        let now = moment().format("L hh:mm");       
        console.log("[" + now + "]" + " Kreiran doktor " + ime);
    }

    dodajPacijenta(pacijent) {
        this.pacijenti.push(pacijent);
    }

    zakaziPregled(pacijent, pregled) {
        pacijent.zakazaniPregledi.push(pregled);
    }

}
