$(window).on('load', function () {
    $('.loader .inner').fadeOut(500, function () {
        $('.loader').fadeOut(550)
    });
})

$(document).ready(function () {

    // Fade in Effect for page scroll
    function Utils() { }
    Utils.prototype = {
        constructor: Utils,
        isElementInView: function (element, fullyInView) {
            let pageTop = $(window).scrollTop();
            let pageBottom = pageTop + $(window).height();
            let elementTop = $(element).offset().top;
            let elementBottom = elementTop + $(element).height();

            if (fullyInView === true) {
                return pageTop < elementTop && pageBottom > elementBottom;
            } else {
                return elementTop <= pageBottom && elementBottom >= pageTop;
            }
        }
    };

    var Utils = new Utils();
    $(window).on("load", addFadeIn());

    $(window).scroll(function () {
        addFadeIn(true);
    });

    function addFadeIn(repeat) {
        let classToFadeIn = ".will-fadeIn";

        $(classToFadeIn).each(function (index) {
            let isElementInView = Utils.isElementInView($(this), false);
            if (isElementInView) {
                if (!$(this).hasClass("fadeInRight") && !$(this).hasClass("fadeInLeft")) {
                    if (index % 2 == 0) $(this).addClass("fadeInRight");
                    else $(this).addClass("fadeInLeft");
                }
            }
            // else if (repeat) {
            //     $(this).removeClass("fadeInRight");
            //     $(this).removeClass("fadeInLeft");
            // }
        });
    }
    // End Fade in effect

    // Pop up effect for project demos
    $('.popup-btn').click(function () {
        let popupBlock = $('#' + $(this).data('popup'));
        popupBlock.addClass('active')
            .find('.fade-out').click(function () {
                popupBlock.css('opacity', '0').find('.popup-content').css('margin-top', '350px');
                setTimeout(function () {
                    $('.popup').removeClass('active');
                    popupBlock.css('opacity', '').find('.popup-content').css('margin-top', '');
                }, 600);
            });
    });
    let btn = $('#button');

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

    // End Pop up effect for project demos
});
