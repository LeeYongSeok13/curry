$(function () {
    $('.main_Slider').slick({
        arrows: false,
        dots: true,
    });

    $('.ad_slider').slick({
        arrows: false,
    });

    $('.ad_slider').on('init afterChange', function () {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    })

    $('.tab_menu li').on('click', function (event) {
        event.preventDefault();
        var idx = $(this).index();
        $('.tab_menu li').removeClass('on');
        $('.tab_menu li').eq(idx).addClass('on');
    });

    $('.tab_menu li').on('click', function (event) {
        event.preventDefault();
        var idx = $(this).index();
        $('.tab_content ul li').removeClass('on');
        $('.tab_content ul li').eq(idx).addClass('on');
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
    });
});