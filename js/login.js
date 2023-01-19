let a, b, c, username, password, uname, pname;
username = localStorage.getItem('username')
password = localStorage.getItem('password')
a = document.querySelector('#username')
b = document.querySelector('#password')
c = document.querySelector('#submit')
pinuname = document.querySelector('#pinuname')
uname = document.getElementById('uname')
pname = document.getElementById('pname')
yyy = function(){
    event.preventDefault();
}
funone = function(){
    if (username != a.value && a.value != ""){
        uname.innerHTML = 'Incorrect Username'
        yyy();
        return;
    }  
}
funtwo = function(){
    if (password != b.value && b.value != ""){
        pname.innerHTML = 'Incorrect Password'
        yyy();
        return;
    }    
} 
funthree = function(){
   if(a.value == ""){
        uname.innerHTML = 'Please fill in this field'
        yyy();
        return;
   }
}
funfour = function(){
    if(b.value == ""){
        pname.innerHTML = 'Please fill in this field'
        yyy();
        return;
    }
}
funfive = function(){
    if(username == a.value){
        yyy();
        uname.innerHTML = ''
        return
    }
    if(password == b.value){
        yyy();
        pname.innerHTML = ''
        return
    }
}
funsix = function(){
    if(username == a.value && password == b.value){
        location.replace('../html/home.html')
    }
}
validate = function(){
    funone();
    funtwo();
    funthree();
    funfour();
    funfive();
    funsix();
}