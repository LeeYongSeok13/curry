$(function () {
    $('.main_Slider').slick({
        arrows: false,
        dots: true,
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 500) {
            $('.toTop').fadeIn(300);
        } else {
            $('.toTop').fadeOut(1000);
        }
    });


    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 500);
    })
});