function horaTotal() {
    var fecha = new Date()
    var minutos = fecha.getMinutes()
    if (minutos < 10)
        minutos = "0" + minutos
    var horas = fecha.getHours()
    if (horas < 10)
        horas = "0" + horas
    return horas + ":" + minutos
}
var cont = 0;
var Laboratoria = [];
var Mariana = [];
var Aldo = [];
var Chama = [];
var Chamo = [];
var Katy = [];
var Andrea = [];
var Raymi = [];
var Papu = [];

$(document).ready(function () {
    $('.msj').click(function hola() {
        var data = $(this).attr('data');
        var value = $(this).attr('value');
        var imag = $(this).find('img').attr('src');
        $('.new').html('<img src="' + imag + '" class="img-circle"/>')
        $('.new').append('<span>' + data + '</span>');
        $('#blanco').empty();
    });
    $('#enviomsj').keypress(function (e) {
        var hora = horaTotal();
        var mensaje = $('#enviomsj').val();
        if (e.which == 13) {
            $(this).val('');
            $('#blanco').append('<div class="mensaje comment">' + mensaje + "</div>");
            $('#blanco').append('<span>' + hora + '</span>');

            if (value === "1") {
                Laboratoria.push(mensaje);
            } else if (value === "2") {
                Raymi.push(mensaje);

            } else if (value === "3") {
                Mariana.push(mensaje);

            } else if (value === "4") {
                Chama.push(mensaje);

            } else if (value === "5") {
                Chamo.push(mensaje);

            } else if (value === "6") {
                Andrea.push(mensaje);

            }
            if (value === "7") {
                Papu.push(mensaje);
            }
            if (value === "8") {
                Katy.push(mensaje);
            }
            if (value === "9") {
                Aldo.push(mensaje);
            }
        } else {}
    });
    $.expr[':'].icontains = function (obj, index, meta, stack) {
        return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
    };
    $(document).ready(function () {
        $('#buscador').keyup(function () {
            buscar = $(this).val();
            $('#lista li h4').removeClass('resaltar');
            if (jQuery.trim(buscar) != '') {
                $("#lista li h4:icontains('" + buscar + "')").addClass('resaltar');
            }
        });
    });

});