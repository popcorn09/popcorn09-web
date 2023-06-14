$(document).ready(function() {

    $('#side-nav-toggle').click(function() {
        $('.side-nav').toggleClass('open');
    });

    $('.list-group-item-action').click(function() {
        $('.side-nav').toggleClass('open');
    });

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

});