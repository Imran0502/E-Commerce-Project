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


//-----------------------------------------------------------------------------------


let cus_name = document.querySelector("#cus_name")

let cus_email = document.querySelector("#cus_email")

let cus_msg = document.querySelector("#cus_msg")


let form = document.querySelector("form")


form.addEventListener("submit",function(e){
    e.preventDefault()
    validate_form()


})

function validate_form(){
   let cname = cus_name.value.trim()
    let cmail = cus_email.value.trim()
    let cmsg = cus_msg.value.trim()
    if(cname===""){
        setError(cus_name,"required")
    }
    else{
        setSuccess(cus_name)
    }

    if(cmail===""){
        setError(cus_email,"required")
    }


    else{
        setSuccess(cus_email)
    }


    


   

}

function setError(element,message){
    let parent_ = element.parentElement
    console.log(parent_)
    let err = parent_.querySelector(".err")
    err.innerHTML = message
    parent_.classList.add("error")
    parent_.classList.remove("success")

}

function setSuccess(element){
    let parent_ = element.parentElement

    let err = parent_.querySelector(".err")
    err.innerHTML = " "
    parent_.classList.add("sucess")
    parent_.classList.remove("error")

}

//------------------------------------------------------------------------------------




















