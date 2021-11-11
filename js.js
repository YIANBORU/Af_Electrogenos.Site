//NAVBAR//
$(document).ready(function() {
    $('.sidenav').sidenav();
});
//slider
$(document).ready(function() {
    $('.slider').slider({
        indicators: true,
        height: 700,
        transition: 200,
        interval: 5000
    });
});

// Pause - start slider
$(document).ready(function() {
    $(".slider").mouseenter(function() {
        $('.slider').slider('pause');
    });
    $(".slider").mouseleave(function() {
        $('.slider').slider('start');
    });
});
$(document).ready(function() {
    $('.collapsible').collapsible();
});
$(document).ready(function() {
    $('.parallax').parallax();
});

// funcion para que el carousel este en modo autoplay
$('.carousel').carousel();
setInterval(function() {
    $('.carousel').carousel('next');
}, 3000); // every 3 seconds

$('.carousel').carousel();
setInterval(function() {
    $('#clientesC').carousel('next');
}, 3000);

$(document).ready(function() {
    $('.carousel').carousel({
        duration: 800
    });
});


$(document).ready(function() {
    $('.modal').modal();
});


// Or with jQuery

$(document).ready(function() {
    $('select').formSelect();
});

//autocomplete
$(document).ready(function() {
    $('input.autocomplete').autocomplete({
        data: {
            "Arauca": null,
            "Armenia": null,
            "Barranquilla": null,
            "Bogotá D.C.": null,
            "Bucaramanga": null,
            "Cali": null,
            "Cartagena": null,
            "Cúcuta": null,
            "Florencia": null,
            "Ibagué": null,
            "Leticia": null,
            "Manizales": null,
            "Medellín": null,
            "Mitú": null,
            "Mocoa": null,
            "Montería": null,
            "Neiva": null,
            "Pasto": null,
            "Pereira": null,
            "Popayán": null,
            "Quibdó": null,
            "Riohacha": null,
            "San Andrés": null,
            "San José del Guaviare": null,
            "Santa Marta": null,
            "Sincelejo": null,
            "Tunja": null,
            "Valledupar": null,
            "Villavicencio": null,
            "Yopal": null,
        },
    });
});