'use strict';
// Tareas: hacer una calculadora y pedir como consigna hacer 4 operaciones diferentes que den 200;
window.addEventListener('load', function(){
    
    // trayendo las variables
    var n0 = document.querySelector('#cero');
    var n1 = document.querySelector('#uno');
    var n2 = document.querySelector('#dos');
    var n3 = document.querySelector('#tres');
    var n4 = document.querySelector('#cuatro');
    var n5 = document.querySelector('#cinco');
    var n6 = document.querySelector('#seis');
    var n7 = document.querySelector('#siete');
    var n8 = document.querySelector('#ocho');
    var n9 = document.querySelector('#nueve');
    var division = document.querySelector('#division');
    var multiplicacion = document.querySelector('#multiplicacion');
    var resta = document.querySelector('#resta');
    var suma = document.querySelector('#suma');
    var igual = document.querySelector('#igual');
    var reset = document.querySelector('#reset');
    var resultado = document.querySelector('#resultado');
    // variable de la ul resultado
    var ulResultado = document.querySelector('#resGameTwo');
    // variable de los botones play y reset
    var btnReset2 = document.querySelector('#btnReset2');

    //variables operando
    var operandoa;
    var operandob;
    var operacion;

    // dandole valor a cada boton numeros
    n0.addEventListener('click', function(){
        resultado.textContent = resultado.textContent + '0';
    });
    n1.addEventListener('click', function(){
        resultado.textContent = resultado.textContent + '1';
    });
    n2.addEventListener('click', function(){
        resultado.textContent = resultado.textContent + '2';
    });
    n3.addEventListener('click', function(){
        resultado.textContent = resultado.textContent + '3';
    });
    n4.addEventListener('click', function(){
        resultado.textContent = resultado.textContent + '4';
    });
    n5.addEventListener('click', function(){
        resultado.textContent = resultado.textContent + '5';
    });
    n6.addEventListener('click', function(){
        resultado.textContent = resultado.textContent + '6';
    });
    n7.addEventListener('click', function(){
        resultado.textContent = resultado.textContent + '7';
    });
    n8.addEventListener('click', function(){
        resultado.textContent = resultado.textContent + '8';
    });
    n9.addEventListener('click', function(){
        resultado.textContent = resultado.textContent + '9';
    });


    //dandole ordenes a los botones operando
    suma.addEventListener('click', function(){
        operandoa = resultado.textContent;
        operacion = '+';
        limpiar()
    });
    resta.addEventListener('click', function(){
        operandoa = resultado.textContent;
        operacion = '-';
        limpiar()
    });
    multiplicacion.addEventListener('click', function(){
        operandoa = resultado.textContent;
        operacion = '*';
        limpiar()
    });
    division.addEventListener('click', function(){
        operandoa = resultado.textContent;
        operacion = '/';
        limpiar()
    });

    igual.addEventListener('click', function(){
        operandob = resultado.textContent;
        resolver();
        darResultado();
    })

    reset.addEventListener('click', function(){
        resetear();
    });

    // funciones claves
    function limpiar(){
        resultado.textContent = '';
    }

    function resetear(){
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = '';
    }

    var res;
    function resolver(){
        switch (operacion) {
            case '+':
                res = parseFloat(operandoa) + parseFloat(operandob);
                break;
            case '-':
                 res = parseFloat(operandoa) - parseFloat(operandob);
                break;
            case '/':
                res = parseFloat(operandoa) / parseFloat(operandob);
                break; 
            case '*':
                res = parseFloat(operandoa) * parseFloat(operandob);
                break;       
        }
        resetear();
        resultado.textContent = res;
    };

    //funcion para dar resultados dentro del div de puntuacion
    var x = 0; //la ocupare para ver si el jugador gana o pierde
    function darResultado(){
        if (res == 200) {
            var p = document.createElement('li');
            p.append(res);
            ulResultado.append(p);
            x ++;
        }else{
            alert("mal");
        }
    }


    // funcion de botones jugar y volver
    btnReset2.addEventListener('click', function(){
        location.reload('file:///C:/Users/pc/Desktop/nextlevel/mipracticaweb/index.html');
    });

    btnGameTwo.addEventListener('click', function(){ 
        if (x == 4) { 
            alert("ganaste");
        } else {
            alert("perdiste");
        }
    });

});