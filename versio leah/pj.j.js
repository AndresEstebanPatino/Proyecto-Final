

document.getElementById('btnVerAlumnos').addEventListener	('click', function() {
    var text= "";
    long = b.length;
    if(long) {
        for (var c=0;c<long;c++) {
            text+= `<li class="card">
            ${b[c].alumno}
            <button onclick="contadormenos(${c})">-</button>
            <input id="${c}" type="text" style="text-align: center; width: 30px;" value="${i}">
            <button onclick="contadormas(${c})">+</button>
            </li>`
        }
    }
    document.getElementById('lista_alumnos_conectados').innerHTML = text;
});

function contadormas(index) {
    i = i + 1;
    var cant = document.getElementById(`${index}`);
    cant.value = i;
    if(cant.value == 1){
        i=1;
        cant.value=1;
    }
}

function contadormenos(index) {
    if (i >= 2) {
        i = i - 1;
        var cant = document.getElementById(`${index}`);
        cant.value = i;
        if (cant.value == 1) {
            i=1;
            cant.value=1;
        }
    }
}