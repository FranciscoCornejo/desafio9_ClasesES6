// impuestos.js
class Impuestos {
  constructor(montoBrutoAnual, deducciones) {
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  get MontoBrutoAnual() {
    return this.montoBrutoAnual;
  }

  set MontoBrutoAnual(montoBrutoAnual) {
    this.montoBrutoAnual = montoBrutoAnual;
  }

  get Deducciones() {
    return this.deducciones;
  }

  set Deducciones(deducciones) {
    this.deducciones = deducciones;
  }
}

export default Impuestos;
