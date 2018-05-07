//Celsius
document.getElementById('Celsius').addEventListener('input',
    function (e) {
        let tempCelsius = parseFloat(e.target.value);
        console.log(tempCelsius);
        document.getElementById('Fahr').value = (tempCelsius * (9 / 5)) + 32;
        document.getElementById('Kelvin').value = tempCelsius + 273.15;
    });

//Fahrenheit
document.getElementById('Fahr').addEventListener('input',
    function (e) {
        let tempFahr = parseFloat(e.target.value);
        console.log(tempFahr);
        document.getElementById('Celsius').value = (tempFahr - 32) * (5 / 9);
        document.getElementById('Kelvin').value = (tempFahr + 459.67) * (5 / 9);
    });

//Kelvin
document.getElementById('Kelvin').addEventListener('input',
    function (e) {
        let tempKelvin = parseFloat(e.target.value);
        console.log(tempKelvin);
        document.getElementById('Fahr').value = (tempKelvin * (9 / 5)) - 459.67
        document.getElementById('Celsius').value = tempKelvin - 273.15;
    });

//eventos de mouse over

function mousein() {
    document.getElementById("header").style.cursor = "all-scroll";

}

function mouseout() {
    document.getElementById("header").style.cursor = "initial";
}


var ContenedorPrincipal = document.getElementById("ContenedorPrincipal");
var Height = ContenedorPrincipal.offsetHeight;
var Width = ContenedorPrincipal.offsetWidth;

function CambiarDimensiones() {

    Height = ContenedorPrincipal.offsetHeight;
    Width = ContenedorPrincipal.offsetWidth;
}



//drag & drop

dragElement(document.getElementById(("ConvertidorCompleto")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function restringir() {
        //revisar que no se pase de la derecha
        if ((elmnt.offsetLeft - pos1 > Width / 2)) {
            elmnt.style.left = (Width / 2) + "px";

        } else {
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

        }

        //revisar que no se pase de la izquierda

        if ((0 > elmnt.offsetLeft - pos1)) {
            elmnt.style.left = 0 + "px";

        }

        //revisar que no se pase de arriba

        if ((0 > elmnt.offsetTop - pos2)) {
            elmnt.style.top = 0 + "px";
        }

        //revisar que no se pase de abajo

        if ((elmnt.offsetTop - pos2 > Height - Height * 0.90)) {
            elmnt.style.top = (Height * 0.10) + "px";

        } else {
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";

        }
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:

        restringir();
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/

        document.onmouseup = null;
        document.onmousemove = null;
    }
}