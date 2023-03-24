const butt=document.getElementById("butt")
let color=["black","blue","green","red"]
butt.addEventListener("click",()=>{
   item=color.shift();
   color.push(item)
   butt.style.backgroundColor=item;

})