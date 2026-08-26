document.addEventListener('DOMContentLoaded', function () {

    const elementos = document.querySelectorAll('.carousel');

    M.Carousel.init(elementos, {
        fullWidth: true,
        indicators: true
    });

});