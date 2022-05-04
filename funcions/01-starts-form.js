'use strict';
window.addEventListener('load', function(){
    // 1- Darle una animacion al titulo

    var tiempo = setInterval(function(){
        var titulo = document.querySelector('#titulo');
        if (titulo.style.color == "white") {

            titulo.style.color = "#46FD46";
            titulo.style.transition = "2s";
        } else{
            titulo.style.color = "white";
            titulo.style.transition = "2s";
        }
    }, 2000);

    // 2- Pedir los datos por el formulario y mostrarlos por pantalla

    var formulario = document.querySelector('#formulario');
    var nombre = document.querySelector('#nombre');
    var apellido = document.querySelector('#apellido');
    var email = document.querySelector('#email');
    var edad = document.querySelector('#edad');
    var datos = [nombre, apellido, email, edad];
    var listaDatos = document.querySelector('#listaDatos');

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        for (var i in datos) {
            var li = document.createElement ('li');
            li.append(datos[i].value);
            listaDatos.append(li);
        }
        return false;
    });
});

 
