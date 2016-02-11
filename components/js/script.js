jQuery(document).ready(function($) {
	var fade_in_videos = $('.fade-in-video');
    
    for(i=0; i < fade_in_videos.length; i++) {
        fade_in_videos[i].addEventListener("playing", function() {
            this.className += ' is-playing';    
        });
    }
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    var fromLeft = $('.from-left');
    var fromRight = $('.from-right');
    
    // Headers animations
    var header = $('.main-header');
    header.each(function(i) {
        if(wScroll > header.eq(i).offset().top - ($(window).height() / 1.2)) {
            header.eq(i).addClass('show');
            
        }
    });
    
   // Sideway animations
    fromLeft.each(function(i) {
        if(wScroll > fromLeft.eq(i).offset().top - ($(window).height() / 1.5)) {
            fromLeft.eq(i).addClass('slide-in');
        }
    });
    
    fromRight.each(function(i) {
        if(wScroll > fromRight.eq(i).offset().top - ($(window).height() / 1.5)) {
            fromRight.eq(i).addClass('slide-in');
        }
    });
    
    // Bar animations
    if(wScroll > $('#skills').offset().top - ($(window).height() / 2)) {
        var item = $('.bar .level');
        item.each(function(i) {
           setTimeout(function() {
              item.eq(i).addClass('start'); 
           }, 150 * (i+1)); 
        });
    }
    
    // thumbnail animations
    var thumbnail = $('.thumbnail');
    thumbnail.each(function(i) {
        if(wScroll > thumbnail.eq(i).offset().top - ($(window).height() / 1.3)) {
            setTimeout(function() {
                $('.thumbnail').eq(i).addClass('showing');
            }, 200 * (i+1));
        }
    });
});