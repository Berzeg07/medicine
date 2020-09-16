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
            refSlider.destroy();
            refSlider = undefined;
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

    var termSlider = undefined;

    function initTermAction() {
        var screenWidth = $(window).width();
        if (screenWidth > 991 && termSlider == undefined) {

            var termSlider = new Swiper('.terms-slider', {
                slidesPerView: 4,
                spaceBetween: 30,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    1279: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    }
                },
            });

        } else if (screenWidth < 992 && termSlider != undefined) {
            termSlider.destroy();
            termSlider = undefined;
        }
    }

    initTermAction();

    ymaps.ready(init);

    function init() {
        var center = [55.59113656911934, 37.88662649999996];
        var center2 = [55.744460, 37.533355];
        var center3 = [55.765350, 37.757137];


        var myMap = new ymaps.Map('map', {
            center: center,
            controls: [],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'

        });

        myMap.behaviors.disable('scrollZoom');

        var myPlacemark = new ymaps.Placemark(center, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            balloonContent: 'улица Ивана Франко, 4к4',
            hintContent: 'улица Ивана Франко, 4к4'
        }, {
            // Опции.
            iconLayout: 'default#image',
            iconImageHref: 'img/map-icon.png',
            iconImageSize: [40, 40]
            // preset: 'twirl#violetIcon'
        });

        var myPlacemark2 = new ymaps.Placemark(center2, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            balloonContent: 'улица Ивана Франко, 4к4',
            hintContent: 'улица Ивана Франко, 4к4'
        }, {
            // Опции.
            iconLayout: 'default#image',
            iconImageHref: 'img/map-icon.png',
            iconImageSize: [40, 40]
            // preset: 'twirl#violetIcon'
        });

        var myPlacemark3 = new ymaps.Placemark(center3, {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            balloonContent: 'улица Ивана Франко, 4к4',
            hintContent: 'улица Ивана Франко, 4к4'
        }, {
            // Опции.
            iconLayout: 'default#image',
            iconImageHref: 'img/map-icon.png',
            iconImageSize: [40, 40]
            // preset: 'twirl#violetIcon'
        });

        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark2);
        myMap.geoObjects.add(myPlacemark3);

    }


});
