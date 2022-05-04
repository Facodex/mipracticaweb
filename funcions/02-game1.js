'use strict';
window.addEventListener('load', function(){
    var caja2 = document.querySelector('#caja2');
    var caja6 = document.querySelector('#caja6');
    var caja8 = document.querySelector('#caja8');
    var btnGameOne = document.querySelector('#btnGameOne');
    var img1 = document.querySelector('#img1');
    var img2 = document.querySelector('#img2');
    var img3 = document.querySelector('#img3');
    var pointsOne = document.querySelector('#pointsOne');
    var btnReset = document.querySelector('.resetear');
    var resultado1 = document.querySelector('.puntosGameOne');


    btnGameOne.addEventListener("click", function darResultado(){
        if (caja2.checked && caja6.checked && caja8.checked) {
            pointsOne.innerHTML = "10 excelente!";
            img1.style.opacity = "1";
            img2.style.opacity = "1";
            img3.style.opacity = "1";
        }else{
            pointsOne.innerHTML = "0 vuelve a intentarlo!";
        }
    });
    btnReset.addEventListener('click', function(){
        location.reload('file:///C:/Users/pc/Desktop/nextlevel/mipracticaweb/index.html?#');
    });
});
