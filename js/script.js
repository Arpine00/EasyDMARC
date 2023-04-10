document.getElementById("menu_btn").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
});

document.querySelector(".dropdown_menu").addEventListener("click", function() {
    this.children[1].classList.toggle("active");
});