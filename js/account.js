//MENU BUTTON...
let links = document.querySelector('#links')
function open_menu(){
    if(links.style.height == "200px"){
        links.style.height = 0;
    }
    else{
        links.style.height = "200px";
    }}


//LOGOUT NOTIFICATION...
logout = () =>{
    document.getElementById('show').style.display = "block";
    document.getElementById('links').style.height = "0px"
}
let cancel = document.querySelector('#show')
let stay = document.querySelector('#ans')
let no = document.querySelector('.no')
  
stay.addEventListener('click', ()=>{ 
    if(document.getElementById('ans').style.backgroundColor == "red"){
    document.getElementById('ans').style.backgroundColor = "teal"
    }
    else{
        document.getElementById('ans').style.backgroundColor = "yellow"
    }
})

cancel.addEventListener('click', () =>{
    if(document.getElementById('ans').style.backgroundColor == "yellow"){
        document.getElementById('show').style.display = "block"
        document.getElementById('ans').style.backgroundColor = "teal"
    }
    else{
        document.getElementById('show').style.display = "none"
    }
})
no.addEventListener('click', () =>{
    document.getElementById('ans').style.backgroundColor = "red"
})


//SIDE NAV...
var firstname = localStorage.getItem("firstname")
if(firstname){
    document.getElementById("name").innerHTML = "Hello, " + firstname;
}
//Open Nav
var open_sidenav = document.querySelector('#icon2')
open_sidenav.addEventListener('click', openit = ()=>{
    document.getElementById('space-account').style.marginLeft = "0%";
})

//Close Side Nav...
var close_sidenav = document.getElementById("close-nav")
close_sidenav.addEventListener('click', ()=>{
    document.getElementById('space-account').style.marginLeft = "-100%";
    main.style.backgroundColor = "red"
})
var cover = document.querySelector('#space-account');
var main = document.querySelector('#ff-account');
main.addEventListener('click', ()=>{
    if(main.style.backgroundColor == "red"){
        main.style.backgroundColor = "lavender"
    }
    else{
    main.style.backgroundColor = "red";
    }
})
cover.addEventListener('click', ()=>{
    if(main.style.backgroundColor == "red"){
        main.style.backgroundColor = "lavender"
        document.getElementById('space-account').style.marginLeft = "0%";
    }
    else{
    document.getElementById('space-account').style.marginLeft = "-100%";
    }
})
