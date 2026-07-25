const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

menu.addEventListener("click", function(){

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menu.innerHTML = "✕";
    }else{
        menu.innerHTML = "☰";
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
