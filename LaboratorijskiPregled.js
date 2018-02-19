class LaboratorijskiPregled {
    constructor(datum, vreme) {
        if (new.target === LaboratorijskiPregled) {
            throw new TypeError("Cannot construct abstract instances directly.");
        }
        if (this.obaviPregled === undefined) {
            throw new TypeError("Must override method obaviPregled().");
        }
        else {
            this.datum = datum;
            this.vreme = vreme;
        }
    }
    obaviPregled() {
        this.datum = new moment().format("L");
        this.vreme = new moment().format("hh:mm");
    }
}