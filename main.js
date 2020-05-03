$(".fa-chevron-right").click(function(){
    //creo una variabile per la foto corrente e rimuovo la classe
    var foto_corrente = $('img.visible');
    foto_corrente.removeClass('visible')

    //creo una variabile per il pallino corrente e rimuovo la classe
    var pallino_corrente = $('.bullets .color');
    pallino_corrente.removeClass('color')

    //creo una variabile per la foto seccussiva e aggiungo la classe
    var foto_successiva = foto_corrente.next('img')
    foto_successiva.addClass('visible')

    //creo una variabile per il pallino seccussivo e aggiungo la classe
    var pallino_successivo = pallino_corrente.next('i')
    pallino_successivo.addClass('color')

    if (foto_successiva.length != 0) {
        foto_successiva.addClass('visible')
    } else{
        foto_successiva = $('img:first-child')
        foto_successiva.addClass('visible')
    }

    if (pallino_successivo.length != 0) {
        pallino_successivo.addClass('color')
    } else{
        pallino_successivo = $('i:first-child')
        pallino_successivo.addClass('color')
    }
});

$(".fa-chevron-left").click(function(){
    //creo una variabile per la foto corrente e rimuovo la classe
    var foto_corrente = $('img.visible');
    foto_corrente.removeClass('visible')

    //creo una variabile per il pallino corrente e rimuovo la classe
    var pallino_corrente = $('.bullets .color');
    pallino_corrente.removeClass('color')

    //creo una variabile per il pallino seccussivo e aggiungo la classe
    var pallino_precedente = pallino_corrente.prev('i')
    pallino_precedente.addClass('color')

    //creo una variabile per la foto precedente e aggiungo la classe
    var foto_precedente = foto_corrente.prev('img')
    foto_precedente.addClass('visible')

    if (foto_precedente.length != 0) {
        foto_precedente.addClass('visible')
    } else{
        foto_precedente = $('img:last-child')
        foto_precedente.addClass('visible')
    }

    if (pallino_precedente.length != 0) {
        pallino_precedente.addClass('color')
    } else{
        pallino_precedente = $('i:last-child')
        pallino_precedente.addClass('color')
    }
});
