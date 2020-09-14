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
});
