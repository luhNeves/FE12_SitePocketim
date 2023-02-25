window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let windowPosition = window.scrollY > 0;
    header.classList.toggle("scrolling-active", windowPosition);
});

function cadastrarNewsletter(){
    let email = document.getElementById("campo-email").value
    alert(email)

}

function mostrarMenu($event){

    let menu = document.getElementById('menu')

    if (getComputedStyle(menu).display =="none"){
        menu.style.display = "flex"
    }else{
        if (window.screen.width > 1000) {
            menu.style.display = "none"
        }
    }

    event.preventDefault()
}