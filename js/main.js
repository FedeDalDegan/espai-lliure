// Vaciar formlario luego de enviar.
function vaciarFormulario(){
    setTimeout(() => {
        document.querySelector("form").reset();
    }, 100);
}

// Menu hamburguesa
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
    hamburger.classList.toggle("active");
});