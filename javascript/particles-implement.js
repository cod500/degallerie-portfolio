$(window).on('load', function () {

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particle-div', 'assets/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });


    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    })
})