
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
        $('.navbar-toggle:visible').click();
    }
});


$(document).ready(function(){

    //$("#about .post").addClass('animated zoomIn');

    var h = $(window).height();
    $(window).scroll(function(){
        if ( ($(this).scrollTop()+h) >= $("#about").offset().top) {
            $("#about .post").css({visibility:"visible"});
            $("#about .post").eq(0).addClass('animated zoomIn');
            $("#about .post").eq(1).addClass('animated zoomIn');
            $("#experience .skill").css({visibility:"visible"});
            $("#experience .skill").eq(0).addClass('animated bounceInLeft');
            $("#experience .skill").eq(1).addClass('animated bounceInLeft');

        }
        if ( ($(this).scrollTop()+h) >= $("#education").offset().top) {
            $("#education .post").css({visibility:"visible"});
            $("#education .post").eq(0).addClass('animated zoomIn');
            $("#education .post").eq(1).addClass('animated zoomIn');
            $("#education .skill").css({visibility:"visible"});
            $("#education .skill").eq(0).addClass('animated bounceInLeft');
            $("#experience .skill").eq(1).addClass('animated bounceInLeft');
        }
        if ( ($(this).scrollTop()+h) >= $("#experience").offset().top) {
            $("#experience .post").css({visibility:"visible"});
            $("#experience .post").eq(0).addClass('animated zoomIn');
            $("#experience .post").eq(1).addClass('animated zoomIn');
            $("#experience .skill").css({visibility:"visible"});
            $("#experience .skill").eq(0).addClass('animated bounceInLeft');
            $("#experience .skill").eq(1).addClass('animated bounceInLeft');
        }

    });
});

