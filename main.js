window.addEventListener('load', () =>{
    let a = document.querySelector('#username')
    let b = document.querySelector('#firstname')
    let c = document.querySelector('#surname')
    let d = document.querySelector('#email')
    let e = document.querySelector('#phoneno')
    let f = document.querySelector('#password')
    let g = document.querySelector('#cpassword')
    let i = document.querySelector('#submit')

    let _alocal = localStorage.getItem('username')
    let _blocal = localStorage.getItem('firstname')
    let _clocal = localStorage.getItem('surname')
    let _dlocal = localStorage.getItem('email')
    let _elocal = localStorage.getItem('phoneno')
    let _flocal = localStorage.getItem('password')
    let _glocal = localStorage.getItem('cpassword')
    /*if (_alocal) {a.value = _alocal}
    if (_blocal) {b.value = _blocal}
    if (_clocal) {c.value = _clocal}
    if (_dlocal) {d.value = _dlocal}
    if (_elocal) {e.value = _elocal}
    if (_flocal) {f.value = _flocal}
    if (_glocal) {g.value = _glocal}*/

    let alocal = function(){
        localStorage.setItem('username', a.value)
    }
    let blocal = function(){
        localStorage.setItem('firstname', b.value)
    }
    let clocal = function(){
        localStorage.setItem('surname', c.value)
    }
    let dlocal = function(){
        localStorage.setItem('email', d.value)
    }
    let elocal = function(){
        localStorage.setItem('phoneno', e.value)
    }
    let flocal = function(){
        localStorage.setItem('password', f.value)
    }
    let glocal = function(){
        localStorage.setItem('cpassword', g.value)
    }
    a.addEventListener('input', alocal)
    b.addEventListener('input', blocal)
    c.addEventListener('input', clocal)
    d.addEventListener('input', dlocal)
    e.addEventListener('input', elocal)
    f.addEventListener('input', flocal)
    g.addEventListener('input', glocal)

    console.log(a)

    let yyy =()=> event.preventDefault()

    g.addEventListener('input', () => {
        if (f.value != g.value) {
            document.getElementById('pass').style.display = "block"
        }   
        else { document.getElementById('pass').style.display = "none"}
    })


        i.addEventListener('click', () => {
        if(a.value == "") {
            document.getElementById('uname').style.display = "block"
        }
        else (
            document.getElementById('uname').style.display = "none"
        )
        if(b.value == "") {
            document.getElementById('fname').style.display = "block"
        }
        else{
            document.getElementById('fname').style.display = "none"
        }
        if(c.value == "") {
            document.getElementById('sname').style.display = "block"
        }
        else{
            document.getElementById('sname').style.display = "none"
        }
        if(d.value == "") {
            document.getElementById('ename').style.display = "block"
        }
        else{
            document.getElementById('ename').style.display = "none"
        }
        if(e.value == "") {
            document.getElementById('phname').style.display = "block"
        }
        else{
            document.getElementById('phname').style.display = "none"
        }
        if(f.value == "") {
            document.getElementById('pname').style.display = "block"
        }
        else{
            document.getElementById('pname').style.display = "none"
        }
        if(g.value == "") {
            document.getElementById('cpname').style.display = "block"
        }
        else{
            document.getElementById('cpname').style.display = "none"
        }

        console.log({a:a.value,b:b.value,c:c.value,d:d.value,e:e.value,f:f.value})
        if (a.value == ""|| b.value == ""|| c.value == ""|| d.value == ""|| e.value == ""|| f.value == "" || g.value ==""||
            document.getElementById('pass').style.display == "block"){
           yyy();
           return;
        }
        /*if (a.value != "" && b.value != "" && c.value != "" && d.value != "" && e.value != ""&& f.value != "" && e.value != "") {
          
        }*/
    })

    console.log({yyy})
})


