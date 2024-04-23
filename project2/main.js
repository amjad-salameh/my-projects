let btn = document.getElementById('btn');   
let div = document.getElementById('div');
let a=["red", "green", "blue", "yellow","gray","gold","orange","pink","purple"];
let i=0;
btn.onclick = function ()
{
   
    div.style.backgroundColor = a[i];
i++;
if(i ==9){
    i=0;
}
    }

