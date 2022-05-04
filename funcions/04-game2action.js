$(document).ready(function(){
    var divs = $('div');
    var festejo2 = $('#festejo2');
    var btn2 = $('#btnGameTwo');

    //si a un div se le puso esa clase es porque gano el juego
    btn2.click(function(){
        if (divs.hasClass('festejo22')) {
            festejo2.toggle('explode', '10000ms');
        }
    });
    
});