let input = document.getElementById("input");
let btn = document.getElementById("btn");
let msg = document.getElementById("msg"); 

btn.onclick=function(){


input.value =""; 
if(inputval != ""){
let inputval= input.value;
msg.innerHTML=inputval;
}
}

