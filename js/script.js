/*---------------------------------------

Project: Sulz - Creative Portfolio Template
TemplateVersion: 1.0
Author: YasirKareem

01. All Script
    02.1 Navbar Fixed Top
    02.2 Navbar Toggle
    02.3 Navbar Collapse Hide
    02.4 Scroll Spy
    02.5 Scroll Top
    02.6 testimonials
    02.7 togglePassword

02. Coming Soon Page

---------------------------------------*/

// allScript
$(function () {
    'use strict';
    // navbarFixedTop
    $(window).scroll(function () {
        if ($('.navbar').offset().top > 50) {
            $('.navbar-fixed-top').addClass('top-nav');
        } else {
            $('.navbar-fixed-top').removeClass('top-nav');
        }
    });

    // navbarToggle
    $('.menu-icon').on('click', function () {
        $('.navbar-toggle').toggleClass('change');
    });

    // navbarCollapseHide
    $('a.click-close').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    // scrollSpy
    $('body').scrollspy({target: ".navbar", offset: 50});
    $("#menu a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });

    // scrollTop
    var scrollButton = $(".scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 400) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    scrollButton.on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    // testimonials
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        responsiveClass: true,
        autoplayHoverPause: true,
        responsive: {
            991: {
                items: 3
            },
            767: {
                items: 2
            },
            480: {
                items: 1
            },
            330: {
                items: 1
            }
        }
    });

    $("button.owl-prev, button.owl-next").parent().addClass('container');
    $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".owl-next").html('<i class="fa fa-chevron-right"></i>');

    // togglePassword
    $(".toggle-password").on('click', function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("data-toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

});

// comingSoonPage
// var count = new Date("oct 08,2018 00:01:00").getTime();
// var x = setInterval(function () {
//     'use strict';
//     var now = new Date().getTime(),
//         d = count - now,
//         days = Math.floor(d / (1000 * 60 * 60 * 24)),
//         hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds = Math.floor((d % (1000 * 60)) / 1000);
//
//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = minutes;
//     document.getElementById("seconds").innerHTML = seconds;
//
//     if (d <= 0) {
//         clearInterval(x);
//     }
// }, 1000);
