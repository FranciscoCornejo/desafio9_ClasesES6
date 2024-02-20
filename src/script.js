// main.js
import Cliente from "./modulo/scriptCliente.js";
import Impuestos from "./modulo/scriptImpuestos.js";

const impuestosCliente = new Impuestos(100000, 20000);
const cliente = new Cliente("NombreCliente", impuestosCliente);

console.log(cliente.calcularImpuesto());
