// back to top js code

$(function(){
//==== Back-to-top button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});
//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1000);
});

// sticky header js code

  //  Stykey Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('my_stick_bg');
    }
    else {
         $('.navbar').removeClass('my_stick_bg');
    }
    });  











});