var topic = document.querySelector('#title')
var mainpic = document.querySelector('#mainpic')
var body = document.querySelector('#body')
var pic1 = document.querySelector('#sub1')
var pic2 = document.querySelector('#sub2')
var pic3 = document.querySelector('#sub3')
var product = JSON.parse(localStorage.getItem('product'))
var product_name = document.getElementById('name')
var brand = document.getElementById('brand')
var price = document.getElementById('price')

//TITLE NAME...

topic.innerHTML = product.name

//PARSING OF INFO...
mainpic.src = product.photo
product_name.innerHTML = product.name
brand.innerHTML += product.brand
price.innerHTML = product.price
pic1.src = product.photo

//ENLARGE PIC...

mainpic.addEventListener('click', () =>{
    var cover = document.createElement('div')
    cover.classList.add('cover')
    body.appendChild(cover)
    body.style.overflow = 'hidden'

    var middle = document.createElement('img')
    middle.src = mainpic.src
    middle.classList.add('middle')
    cover.appendChild(middle)

    var close = document.createElement('i')
    close.classList.add('fa', 'fa-times')
    close.innerHTML ='X'
    cover.appendChild(close)

    close.addEventListener('click', () =>{
        cover.style.display = 'none'
        body.style.overflow = 'auto'
    })

})

//CHANGE PIC...
pic1.addEventListener('click', () =>{
    mainpic.src = pic1.src
    pic1.style.border = "3px solid goldenrod"
    pic2.style.border = 'none'
    pic3.style.border = "none"
})

pic2.addEventListener('click', () =>{
    mainpic.src = pic2.src
    pic2.style.border = "3px solid goldenrod"
    pic1.style.border = 'none'
    pic3.style.border = "none"
})

pic3.addEventListener('click', () =>{
    mainpic.src = pic3.src
    pic3.style.border = "3px solid goldenrod"
    pic1.style.border = 'none'
    pic2.style.border = "none"
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

