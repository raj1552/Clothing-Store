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

var form= document.contact_form;
var fname= document.contact_form.fullname;

console.log(form);
console.log(fname);

fname.addEventListener('keyup',function(){
    if(fname.value.length <=4)(
       this.nextElementSibling.innerText ="Error length");
     else {
        this.nextElementSibling.innerText ="";
    }
    
});
let email;// declare
email = document.contact_form.email;//definition
//let form = document.contact_form;
form.addEventListener("submit",function(event){
    if(email.value.length==0){
        email.nextElementSibling.innerText = "Email required";  
        event.preventDefault(); 
    } else {
        email.nextElementSibling.innerText="";
    }
})

email.addEventListener("keyup",function(){
    if(this.value.indexOf("@") == -1){
        this.nextElementSibling.innerText= "One '@' is required";
    } else if (this.value.indexOf(".") == -1) {
        this.nextElementSibling.innerText ="One '.' is required";
    }else {
        this.nextElementSibling.innerText="";
    }
})