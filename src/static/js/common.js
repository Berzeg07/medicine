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
            // $('.scrollbar-slider__wrapper').removeAttr('style');
            // $('.scrollbar-slider__slide').removeAttr('style');
        }
    }

    initAction();
});
