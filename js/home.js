//MENU BUTTON...
let links = document.querySelector('#links')
function open_menu(){
    if(links.style.height == "150px"){
        links.style.height = 0;
    }
    else{
        links.style.height = "150px";
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


//IMAGE AUTO SLIDER...
var timer = 1;
setInterval(function(){
    document.getElementById('r' + timer).checked = true;
    timer++
    if(timer > 10){
        timer = 1
    }
}, 5000)


var bar = document.querySelector('.yyy') 
var img = document.querySelector('.pics') 
var eea = 0;


window.addEventListener('load', () =>{
    setInterval(function(){
    eea++;
    if(eea > 5){
        eea = 0
    }
    if(eea == 5){
        bar.style.display = "none";
    }},2000)
})

img.addEventListener('click', () =>{
    bar.style.display = "flex";
    eea = 0;
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


//NOTIFICATION SLIDER 
/*var not = document.querySelector('.nft')
var notnum = 550;
var px = 0

setInterval(()=>{
    var ok = 0.2 * notnum
    if (notnum <= 550 && notnum >=1 ){
    not.style.marginLeft = ok + "%";
    notnum--;
    
    }
    
    if (notnum == 0 ){
        not.style.marginLeft = px + "px";
        px--
    }
    if (px == -915){
        notnum = 550
        px = 0
    }
}, 15)*/
