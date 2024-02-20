// main.js
import Cliente from "./modulo/scriptCliente.js";
import Impuestos from "./modulo/scriptImpuestos.js";

let impuestosCliente = new Impuestos(100000, 20000);
let cliente = new Cliente("Francisco", impuestosCliente);
console.log(cliente.calcularImpuesto());

let impuestosCliente2 = new Impuestos(200000, 40000);
let cliente2 = new Cliente("Pedro", impuestosCliente2);
console.log(cliente2.calcularImpuesto());
