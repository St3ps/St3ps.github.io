console.log('main script loaded');

/*only top li is to be affected*/
$("ul.navbar-nav li").click(function() {

    $("ul.navbar-nav li").removeClass("active");
    $(this).addClass("active");

});



$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});



function checkScroll(){
    var startY = $('.navbar').height() * 2.5; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}