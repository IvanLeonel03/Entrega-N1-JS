function bienvenido(nombre) {
    return "Bienvenido " + nombre + " a mi página web de prueba. A continuación le pediremos algunos datos para registrarse.";
}

function confirmarContraseña() {
    let pass, confirm;
    do {
        pass = prompt("Ingrese su contraseña");
        confirm = prompt("Confirme su contraseña");
        if (pass !== confirm) {
            alert("Las contraseñas no coinciden, intente nuevamente");
        }
    } while (pass !== confirm);
    alert("Contraseña confirmada correctamente");
    return pass;
}

let nombre = prompt("Ingrese su nombre");
alert(bienvenido(nombre));

let nombreUsuario = prompt("Ingrese su nombre de usuario");
let correoElectronico = prompt("Ingrese su correo electrónico");
let contrasena = confirmarContraseña();

let fechaNacimiento = prompt("Ingrese su fecha de nacimiento en formato dd/mm/aaaa");
let localidad = prompt("Ingrese su localidad");
let provincia = prompt("Ingrese su provincia");
let pais = prompt("Ingrese su país");
let telefono = prompt("Ingrese su número de teléfono");
let codigoPostal = prompt("Ingrese su código postal");
let direccion = prompt("Ingrese su dirección");
let nombreCompleto = prompt("Ingrese su nombre completo");
let dni = prompt("Ingrese su DNI o número de identificación");

alert("Gracias por registrarse " + nombreUsuario + ". Sus datos han sido guardados correctamente.");
alert(
    "Nombre de usuario: " + nombreUsuario +
    "\nCorreo electrónico: " + correoElectronico +
    "\nContraseña: " + contrasena +
    "\nFecha de nacimiento: " + fechaNacimiento +
    "\nLocalidad: " + localidad +
    "\nProvincia: " + provincia +
    "\nPaís: " + pais +
    "\nTeléfono: " + telefono +
    "\nCódigo postal: " + codigoPostal +
    "\nDirección: " + direccion +
    "\nNombre completo: " + nombreCompleto +
    "\nDNI: " + dni
);

let usuario = [];

usuario.push({
    "nombre": nombreUsuario,
    "correo electronico": correoElectronico,
    "contraseña": contrasena,
    "fecha de nacimiento": fechaNacimiento,
    "localidad": localidad,
    "provincia": provincia,
    "pais": pais,
    "telefono": telefono,
    "codigo postal": codigoPostal,
    "direccion": direccion,
    "nombre completo": nombreCompleto,
    "dni": dni
});

console.log(usuario);
