
class KrvniPritisak extends LaboratorijskiPregled {
    constructor(datum, vreme, gornjaVrednost, donjaVrednost, puls) {
        super(datum, vreme);
        this.gornjaVrednost = gornjaVrednost;
        this.donjaVrednost = donjaVrednost;
        this.puls = puls;
    }
    obaviPregled() {
        super.obaviPregled();
        this.gornjaVrednost = Math.floor((Math.random() * 150) + 100);
        this.donjaVrednost = Math.floor((Math.random() * 90) + 60);
        this.puls = Math.floor((Math.random() * 120) + 80);


        //logovanje pregleda krvnog pritiska
        let now = moment().format("L hh:mm");
        console.log("[" + now + "]"  + " Obavljen pregled krvnog pritiska");
    }   
}
