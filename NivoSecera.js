
class NivoSecera extends LaboratorijskiPregled {
    constructor(datum, vreme, vrednost, vremePoslednjegObroka) {
        super(datum, vreme);
        this.vrednost = vrednost;
        this.vremePoslednjegObroka = vremePoslednjegObroka;
    }
    obaviPregled() {
        super.obaviPregled();
        this.vrednost = Math.floor((Math.random() * 100) + 10);
        this.vremePoslednjegObroka = moment().startOf('hour').fromNow();  
        
        //logovanje pregleda nivoa secera u krvi
        let now = moment().format("L hh:mm");
        console.log("[" + now + "]"  + " Obavljen pregled nivoa secera u krvi.");
    }
}
