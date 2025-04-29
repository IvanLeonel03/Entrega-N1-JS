let prompt
prompt = require('prompt-sync')();

const nombreUsuario = prompt('Por favor, ingresa tu nombre: ');
console.log(`¡Hola, ${nombreUsuario}! Bienvenido.`);