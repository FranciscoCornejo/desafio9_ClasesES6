"use strict";

var _scriptCliente = _interopRequireDefault(require("./modulo/scriptCliente.js"));
var _scriptImpuestos = _interopRequireDefault(require("./modulo/scriptImpuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// main.js

var C1 = new _scriptCliente["default"]("NombreCliente", impuestosCliente);
var C1Impuestos = new _scriptImpuestos["default"](100000, 20000);
console.log(C1.calcularImpuesto());