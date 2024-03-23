document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario")
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        const { correo, contrasenna } = obtenerDatosFormulario();
        const esValue = validarConstrasenna(contrasenna) && validarCorreo(correo);
        esValue ? manejarExito() : manejarError();
    });

});

const obtenerDatosFormulario = () => {
    const correo = document.getElementById("correo").value.trim();
    const contrasenna = document.getElementById("contrasenna").value.trim();

    return { correo, contrasenna }
};
const validarConstrasenna = (contrasenna) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^*]).{8,}$/.test(contrasenna);
};

const validarCorreo = (correo) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
};
const manejarExito = () => {
    alert("inicio de seccion exitoso<<");
    limpiarCamposTexto();
}
const manejarError = () => {
    alert("datos no son validos");
};
const limpiarCamposTexto = () => {
    const campos = document.querySelectorAll("#formulario input[type='email'], #formulario input[type='password']");
    campos.forEach((campo) => campo.value = "");
};