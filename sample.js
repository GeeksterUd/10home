const btn=document.getElementById("btn")
const color=["black","green","blue","yellow","orange","purple","blue","dark blue","red","white","brown","light green","cyan","pink"]
btn.addEventListener("click",()=>{
    let random = color[(Math.floor(Math.random() * color.length))]
    document.body.style.backgroundColor=random;
})