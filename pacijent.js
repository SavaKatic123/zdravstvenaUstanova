
class Pacijent extends Osoba {
  constructor(ime, prezime, jmbg, brojKartona) {
      super(ime, prezime);
      this.jmbg = jmbg;
      this.brojKartona = brojKartona;
      this.izabraniLekar = null;
      this.zakazaniPregledi = [];

      Log.logujAkciju("Kreiran pacijent " + this.ime);
  }
  
  izaberiLekara(doktor) {
      this.izabraniLekar = doktor;
      doktor.dodajPacijenta(this);

      //logovanje izabranog lekara
      Log.logujAkciju("Pacijent " + this.ime + " bira lekara " + doktor.ime);
  }

  obaviPregled() {
      if(this.zakazaniPregledi.length > 0) {
          let pregled = this.zakazaniPregledi.pop();
          pregled.obaviPregled();
      }
  }

}
