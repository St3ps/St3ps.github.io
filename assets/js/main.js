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

//function that would solve overlapping issues but for the moment is not being used
function spaceElements(elem1, elem2) {


  
  var e1 = $(elem1).offset().top;
  var e2 = $(elem2).offset().top;
  
  var e1TotalHeight = e1 + $(elem1).height();
    console.log(e1TotalHeight, e2);

  if(e2 < e1TotalHeight ) {
    
    var margin = e1TotalHeight - e2;
    // var e1Top = parseInt($(elem1).css('top'), 10);
    console.log("overlap")
    $(elem2).css( 'margin-top', margin + 10 + "px");
  }
  
                
}


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