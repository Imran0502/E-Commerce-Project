let menu_bar = document.querySelector(".menubar")
let side_navbar = document.querySelector(".side-navlink")
let cross = document.querySelector(".cross")



menu_bar.addEventListener("click",function(){

side_navbar.classList.toggle("nav_show")


})

cross.addEventListener("click",function(){
    side_navbar.classList.remove("nav_show")

})

//-------------------------------------------------------------------------


let products = document.querySelectorAll(".clls")

let search_bar = document.querySelector("#search_bar")

let search_btn = document.querySelector("#search__")


search_btn.addEventListener("click",function(e){
    e.preventDefault()
    let search_barVAL = search_bar.value.trim().toLowerCase()

    products.forEach((val,i)=>{
       let clr = val.childNodes[3]
   if(clr.textContent.toLowerCase()===search_barVAL){
    val.style.display = "block"
   }
   else{
    val.style.display="none"
   }

     
    })
})

//-----------------------------------------------------------------------------------

















