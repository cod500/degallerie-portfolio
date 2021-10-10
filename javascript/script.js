$(window).on('load', function () {
    $('.loader .inner').fadeOut(500, function () {
        $('.loader').fadeOut(550)
    });

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

$(document).ready(function () {

    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    let projectDiv = document.querySelectorAll('.project-div');

    for (let project of projectDiv) {
        project.addEventListener('mouseenter', function () {
            console.log(project.getAttribute("id"));
            let projectId = project.getAttribute("id");

            $('#' + projectId).mouseover(function () {
                console.log($("#" + projectId + ' h4').attr('id'));
                console.log($("#" + projectId + ' p').attr('id'));
                $("#" + projectId + ' p').css('visibility', 'visible');

            });

            $('#' + projectId).mouseout(function () {
                $("#" + projectId + ' p').css('visibility', 'hidden');

            });
        })
    }


    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    });

    $('#filters a').click(function () {
        $('#filters .current').removeClass('current');
        $(this).addClass('current');

        let selector = $(this).attr('data-filter');

        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        })
        return false;
    });



});
