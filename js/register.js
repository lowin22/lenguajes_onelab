document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario")
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const { correo, contrasenna, name,lastname,age,card,gender,fecnac } = obtenerDatosFormulario();
        const esValue = validarConstrasenna(contrasenna) && validarCorreo(correo) &&validarName(name)&&validarLastName(lastname)&&validarAge(age)&&validarCard(card)&&validarGender(gender)&&validarFecnac(fecnac);
        esValue ? manejarExito() : manejarError();
    });

});

const obtenerDatosFormulario = () => {
    const correo = document.getElementById("correo").value.trim();
    const contrasenna = document.getElementById("contrasenna").value.trim();
    const name = document.getElementById("name").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const age = document.getElementById("age").value.trim();
    const card = document.getElementById("card").value.trim();
    const gender = document.getElementById("gender").value.trim();
    const fecnac = document.getElementById("fecha_nacimiento").value.trim();

    return { correo, contrasenna, age, name,lastname,card,gender,fecnac }
};
const validarConstrasenna = (contrasenna) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*]).{8,}$/.test(contrasenna);
};

const validarCorreo = (correo) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
};
const validarName = (name) => {
    return /^[A-Z][a-zA-Z\s'.-]+$/.test(name);
};
const validarLastName = (lastname) => {
    return /^[A-Z][a-zA-Z\s'.-]+$/.test(lastname);
};
const validarAge = (age) => {
    const edadNumero = parseInt(age, 10);
    return !isNaN(edadNumero) && edadNumero >= 18 && edadNumero <= 70;
};
const validarCard = (card) => {
    return /^\d{2}-\d{4}-\d{4}$/.test(card);
};
const validarGender = (gender) => {
    const opcionesValidas = ["Masculino", "Femenino", "Otro"];
    return opcionesValidas.includes(gender);
};
const validarFecnac = (fecnac) => {
    const edadNumero = parseInt(fecnac, 10);
    return !isNaN(edadNumero) && edadNumero >= 18;
};
const manejarExito = () => {
    alert("inicio de seccion exitoso<<");
    limpiarCamposTexto();
}
const manejarError = () => {
    alert("datos no son validos");
};
const limpiarCamposTexto = () => {
    const campos = document.querySelectorAll("#formulario input[type='email'], #formulario input[type='password'], #formulario input[type='text'], #formulario input[type='number'], #formulario input[type='date']");
    campos.forEach((campo) => campo.value = "");
};