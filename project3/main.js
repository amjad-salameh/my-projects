let input = document.querySelector("#myinput");
let btn = document.querySelector("#btn");


btn.addEventListener("click", togglepass);
  function togglepass() {

    if(btn.getAttribute('data-text') =="show") {
        
input.setAttribute('type', 'text');
btn.setAttribute('data-text','hide');
btn.innerHTML = "hide";
    }
else{
    input.setAttribute("type", "password");
    btn.setAttribute("data-text", "show");
    btn.innerHTML = "show";

}}
