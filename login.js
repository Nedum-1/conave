let a, b, c, username, password, uname, pname;
username = localStorage.getItem('username')
password = localStorage.getItem('password')
a = document.querySelector('#username')
b = document.querySelector('#password')
c = document.querySelector('#submit')
pinuname = document.querySelector('#pinuname')
//uname = document.querySelector('#uname')
//pname = document.querySelector('#pname')
yyy = function(){
    event.preventDefault();
}
funone = function(){
    if (username != a.value && a.value != ""){
        document.getElementById('uname').style.display = "block";
        yyy();
        return;
    }  
}
funtwo = function(){
    if (password != b.value && b.value != ""){
        document.getElementById('pname').style.display = "block";
        yyy();
        return;
    }    
} 
funthree = function(){
   if(a.value == ""){
       document.getElementById('unamee').style.display = "block";
       yyy();
       return;
   }
   else{
    document.getElementById('unamee').style.display = "none";
   }
}
funfour = function(){
    if(b.value == ""){
        document.getElementById('pnamee').style.display = "block";
        yyy();
        return;
    }
    else{
        document.getElementById('pnamee').style.display = "none";
       }
}

c.addEventListener('click', () =>{
    funone();
    funtwo();
    funthree();
    funfour()
})