const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".content");
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.innerHTML = `<i class="fa fa-bars"></i>`;
    }
    else {
        menu.classList.add("active");
        toggle.innerHTML = `<i class="fa fa-times"></i>`;
    }
}
toggle.addEventListener("click", toggleMenu, false);
let form= document.contact_form;
let frame= document.contact_form.fullname;
console.log(form);
console.log(fullname)