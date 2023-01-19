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



//MENU BUTTON...
let links = document.querySelector('#links')
function open_menu(){
    if(links.style.height == "165px"){
        links.style.height = 0;
    }
    else{
        links.style.height = "165px";
    }}


    var electronics = [
        {
            photo: "../OTHERS/electronics/cable.webp",
            name: "Copper cable wire",
            rating : "",
            price: "₦99,500",
            brand: "Kamisfe Electronics",
            description: "",
            added: false
        },
        {
            photo: "../OTHERS/electronics/bulb.jfif",
            name: "3 in 1 Electric Bulb",
            rating : "",
            price: "₦999",
            brand: "Kamisfe Electronics",
            description: "",
            added: false
        },
        {
            photo: "../OTHERS/electronics/television.webp",
            name: "Hisense Hd Led Television",
            rating : "",
            price: "₦90,000",
            brand: "Hisense",
            description: "",
            added: false
        },
        {
            photo: "../OTHERS/electronics/speakers.webp",
            name: "Polystar Home Theater System Pv Hf 208",
            rating : "",
            price: "₦55,000",
            brand: "LG Products",
            description: "",
            added: false
        },
        {
            photo: "../OTHERS/electronics/joystick.webp",
            name: "Wireless Controller For PlayStation 4 - Red",
            rating : "",
            price: "₦8,500",
            brand: "Xbox Pads",
            description: "",
            added: false
        },
        {
            photo: "../OTHERS/electronics/camera.webp",
            name: "WNikon Dslr Camera D7100 With 18 - 105mm ",
            rating : "",
            price: "₦410,000",
            brand: "Smart",
            description: "",
            added: false
        },
        {
            photo: "../OTHERS/electronics/remote.webp",
            name: "Gotv Remote Control",
            rating : "",
            price: "₦2,000",
            brand: "LG Products",
            description: "",
            added: false
        }
    ]

    var recommended = document.querySelector('.recommended')

    products =(x)=>{
        var elec = document.createElement('div')
        elec.classList.add('rec')
        recommended.appendChild(elec)

        var img = document.createElement('img')
        img.src = x.photo
        elec.appendChild(img)

        var details = document.createElement('div')
        details.classList.add('details')
        elec.appendChild(details)

        var name = document.createElement('span')
        name.classList.add('name')
        name.innerHTML = x.name
        details.appendChild(name)

        var rating = document.createElement('span')
        rating.classList.add('rating')
        details.appendChild(rating)
        rating.innerHTML = x.rating

        var purchase = document.createElement('span')
        purchase.classList.add('purchase')
        details.appendChild(purchase)
        
        var amount = document.createElement('span')
        amount.classList.add('amount')
        amount.innerHTML = x.price
        purchase.appendChild(amount)

        var add = document.createElement('button')
        add.classList.add('add')
        add.innerHTML = "Add to Cart"
        purchase.appendChild(add)

        img.addEventListener('click', ()=>{
            var new_product = {
                photo: x.photo,
                name: x.name,
                rating : x.rating,
                price: x.price,
                brand: x.brand,
                description: x.description,
                added: x.added
            }

            localStorage.setItem('product', JSON.stringify(new_product))

            location.replace("product.html")
        })

    }

    electronics.forEach(products)
