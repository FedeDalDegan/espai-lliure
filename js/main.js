// Vaciar formlario luego de enviar.
function vaciarFormulario(){
    setTimeout(() => {
        document.querySelector("form").reset();
    }, 100);
}