$(document).ready(function () {
    $(".burger").click(function () {
        $(this).toggleClass('is-active');
        $('.dropdownmenu').toggleClass('is-active');
    });

    $('.select select').selectric();

    $('.select-link').selectric().on('change', function () {
        let link = $(this)[0].selectedOptions[0].dataset.href;
        document.location.href = link;
    });

    var advSlider = new Swiper('.adv-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1279: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        },
    });

    var refSlider = undefined;

    function initAction() {
        var screenWidth = $(window).width();
        if (screenWidth > 1279 && refSlider == undefined) {

            var refSlider = new Swiper('.ref-slider', {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    1599: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    1899: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    }
                },
            });

        } else if (screenWidth < 1280 && refSlider != undefined) {
            aboutSliser.destroy();
            aboutSliser = undefined;
        }
    }

    initAction();

    $('.tab-links a').click(function (e) {
        e.preventDefault();
        $('.tab-links__btn').removeClass('is-active');
        $(this).addClass('is-active');
        var tab = $(this).attr('href');
        $('.tab-block').not(tab).css({ 'display': 'none' });
        $(tab).fadeIn(400);
    });
    $('.tab-links a:first-child').click();

});
