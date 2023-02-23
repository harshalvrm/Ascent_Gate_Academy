(function ($) {

    "use strict";


    /* ================================================= */
    /*	Preloader
     /* ================================================= */
    $(window).on('load', function () {
        $("#preloader").animate({
            'opacity': '0'
        }, 600, function () {
            setTimeout(function () {
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
    });

    /* ================================================== */
    /*	           Scroll Up / Back to top
     /* ================================================== */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $("#scrollUp").fadeIn(200);
        } else {
            $("#scrollUp").fadeOut(200);
        }
    });

    $('#scrollUp').on('click', function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1500);
    });


    /* ================================================= */
    /*	Header Area Navigation Menu
     /* ================================================= */
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            $("header").addClass("background-header");
        } else {
            $("header").removeClass("background-header");
        }
    });

    // Scroll animation init
    window.sr = new scrollReveal();

    // Menu Dropdown Toggle
    if ($('.menu-trigger').length) {
        $(".menu-trigger").on('click', function () {
            $(this).toggleClass('active');
            $('.header-area .nav').slideToggle(200);
        });
    }


    // Menu elevator animation
    $('.header-area a[href*=\\#]:not([href=\\#])').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var targetHash = this.hash;
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var width = $(window).width();
                if (width < 991) {
                    $('.menu-trigger').removeClass('active');
                    $('.header-area .nav').slideUp(200);
                }
                $('html,body').animate({
                    scrollTop: (target.offset().top)
                }, 700, 'swing', function () {
                    window.location.hash = targetHash;
                });
                return false;
            }
        }
    });

    $(window).on('load', function () {

        $('a[href^="#welcome"]').addClass('active');

        //smoothscroll
        $('.menu-item').on('click', function (e) {
            e.preventDefault();
            var athis = this;
            var target = this.hash,
                    menu = target;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 500, 'swing', function () {
                window.location.hash = target;
                $('.menu-item').removeClass('active');
                $(athis).addClass('active');
            });
        });

        $(window).on('scroll', function (event) {
            var scrollPos = $(document).scrollTop() + 80;

            if (scrollPos === 0) {
                $('a[href^="#welcome"]').addClass('active');
                return;
            }
            $('.menu-item').not('[href=""]').not('[href="javascript:;"]').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));

                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.menu-item').removeClass("active");
                    currLink.addClass("active");
                } else {
                    currLink.removeClass("active");
                }
            });
        })
    });


    /* ================================================= */
    /*	ScreenShots Area owl slider
     /* ================================================= */
    function gallery_slider() {
        $(".app_screenshots_slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            margin: 30,
            center: true,
            dots: true,
            responsive: {
                0: {items: 1},
                480: {items: 3},
                992: {items: 5}
            }
        });
    }
    gallery_slider();

    /* ================================================= */
    /*	Testimonial Area owl slider
     /* ================================================= */

    if ($('.testi_slider').length) {
        $('.testi_slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 1,
            nav: true,
            autoplay: 2500,
            smartSpeed: 1500,
            dots: true,
            responsiveClass: true,
            navText: ["<i class='lnr lnr-arrow-left'></i>", "<i class='lnr lnr-arrow-right'></i>"]
        })
    }

    /* ================================================= */
    /*	Achive area counter
     /* ================================================= */

    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });

    /* ================================================= */
    /*	Count Down JS
    /* ================================================= */
        $('#simple-timer').syotimer({
            year: 2022,
            month: 9,
            day: 1,
            hour: 0,
            minute: 0
        });

    /*--------------------
     MAGNIFIC POPUP JS
     ----------------------*/
    var magnifPopup = function () {
        $('.popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    // Call the functions
    magnifPopup();

})(window.jQuery);