// Vaciar formlario luego de enviar.
function vaciarFormulario(){
    setTimeout(() => {
        document.querySelector("form").reset();
    }, 100);
}

// Menu hamburguesa
document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("show");
});