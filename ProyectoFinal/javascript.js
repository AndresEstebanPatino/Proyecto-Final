var a = 0;
function sumar() {
    a = a + 1;
    document.getElementById("contador").innerHTML = a;
}
function restar() {
    a = a - 1;
    document.getElementById("contador").innerHTML = a;
    if(a <= 0){
        console.log("Error");
        document.location.reload();

    }
}

