const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

menu.addEventListener("click", function(){

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menu.innerHTML = "✕";
    }else{
        menu.innerHTML = "☰";
    }
// Kontaktformular Prüfung
const vorname = document.querySelector('input[name="Vorname"]');
const nachname = document.querySelector('input[name="Nachname"]');
const telefon = document.querySelector('input[name="Telefon"]');

if(vorname){
    vorname.addEventListener("input", function(){
        this.value = this.value.replace(/[^a-zA-ZÄÖÜäöüß\s-]/g, "");
    });
}

if(nachname){
    nachname.addEventListener("input", function(){
        this.value = this.value.replace(/[^a-zA-ZÄÖÜäöüß\s-]/g, "");
    });
}

if(telefon){
    telefon.addEventListener("input", function(){
        this.value = this.value.replace(/[^0-9]/g, "");
    });
}
});
const lightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    zoomable: true,
    draggable: true,
    openEffect: "zoom",
    closeEffect: "fade"
});
