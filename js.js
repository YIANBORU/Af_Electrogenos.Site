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
    $('.carousel').carousel();
});
$(document).ready(function() {
    $('.collapsible').collapsible();
});
$(document).ready(function() {
    $('.parallax').parallax();
});