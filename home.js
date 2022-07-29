logout = () =>{
    document.getElementById('show').style.display = "block"
    //document.getElementById('show').style.height = "100%"
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