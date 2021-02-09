
function message(){
    alert('Hola');
    console.log('Esto es un saludo en la consola');
    var newSpan = document.getElementById("newMessage");
    newSpan.innerHTML = "Hola a Todos";
}
function changeStyle(){
    var newSpan = document.getElementById("newMessage");
    newSpan.classList.add('colorSpan');
}
function delStyle(){
    var newSpan = document.getElementById("newMessage");
    newSpan.classList.remove('colorSpan');
}
function addNumbers(){
    var x = prompt("Ingrese un numero");
    var y = prompt("Ingrese un numero");
    if(x != null && x != "" && y != null && y != ""){
        let sum = parseInt(x) + parseInt(y);
        alert(sum);
    }
    else{
        alert("Debe ingresar un numero");
    }
}