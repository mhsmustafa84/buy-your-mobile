$(function () {

    //adjust slider height

    var windowHeight = $(window).height(),
        navBarHeight = $('.navbar').innerHeight();

    $('.slider .carousel-item').height(windowHeight - navBarHeight);

    $('.carousel').carousel({
        interval: 4000
    })

A



});