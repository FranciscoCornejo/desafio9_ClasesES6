// cliente.js
class Cliente {
  constructor(nombre, impuesto) {
    this.nombre = nombre;
    this.impuesto = impuesto;
  }

  get Nombre() {
    return this.nombre;
  }

  set Nombre(nombre) {
    this.nombre = nombre;
  }

  calcularImpuesto() {
    return `Cliente: ${this.Nombre}, Impuesto: ${
      (this.impuesto.MontoBrutoAnual - this.impuesto.Deducciones) * 0.21
    }`;
  }
}

export default Cliente;
