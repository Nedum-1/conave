let imenu = document.querySelector('#icon')
imenu.addEventListener('click', () =>{
    if(document.getElementById('links').style.height == "0px"){
    document.getElementById('links').style.height = "220px"
    }
    else{
        document.getElementById('links').style.height = "0px"
    }
})
logout = () =>{
    document.getElementById('show').style.display = "block"
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
console.log(no)