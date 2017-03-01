/**
 * Created by JakeKuss on 2/21/2017.
 */

$(document).ready(function (){
    $("#scroll-to-top-link").click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    });


    $("#toggle-mobile-nav").click(function (){
        $("#site-canvas").toggleClass('show-nav');
    });

    var $navLinks = $("#nav-list li a, #site-menu-list li a ");
    var currentPath = window.location.pathname;

    $navLinks.removeClass('current');

    $navLinks.each(function (index,value) {
        var linkHref = $(this).attr('href');
        if (linkHref === currentPath) {
            $(this).addClass('current');
        }
    });
});