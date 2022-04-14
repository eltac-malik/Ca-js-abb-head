let btn = document.getElementById("fa-bars")
let menu = document.getElementById("menu")
let x = document.getElementById("fa-xmark")

btn.addEventListener("click",()=>
{
    menu.style.display = "block"
    btn.style.display="none"
    x.style.display="block"
})

x.addEventListener("click",()=>
{
    menu.style.display = "none"
    btn.style.display="block"
    x.style.display="none"
})