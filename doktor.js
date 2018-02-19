
class Doktor extends Osoba {
	constructor(ime, prezime, specijalnost) {
			super(ime, prezime);
			this.specijalnost = specijalnost;
			this.pacijenti = [];

			//logovanje kreiranog doktora    
			Log.logujAkciju("Kreiran doktor " + this.ime);
	}


	dodajPacijenta(pacijent) {
			this.pacijenti.push(pacijent);
	}

	zakaziPregled(pacijent, pregled) {
			pacijent.zakazaniPregledi.push(pregled);
	}

}
