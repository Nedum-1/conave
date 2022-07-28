logout = () =>{
    document.getElementById('show').style.display = "block"
    //document.getElementById('show').style.height = "100%"
}
let cancel = document.querySelector('#show')
let stay = document.querySelector('#ans')


funn =()=>{
    document.getElementById('ans').style.backgroundColor = "yellow"
}
stay.addEventListener('click', funn)


cancel.addEventListener('click', () =>{
    if(document.getElementById('ans').style.backgroundColor == "yellow"){
        document.getElementById('show').style.display = "block"
        document.getElementById('ans').style.backgroundColor = "white"
    }
    else{
        document.getElementById('show').style.display = "none"
    }
})
console.log(stay)