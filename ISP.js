class Printable {
  print() { throw new Error("print() not implemented"); }
}

class Scannable {
  scan() { throw new Error("scan() not implemented"); }
}

class Faxable {
  fax() { throw new Error("fax() not implemented"); }
}


class BasicPrinter extends Printable {
  print() {
    console.log("Printing document...");
  }
}


class OfficePrinter extends Printable {
  print() { console.log("Printing document..."); }
  scan() { console.log("Scanning document..."); }
  fax()  { console.log("Faxing document..."); }
}


const basic = new BasicPrinter();
basic.print(); 