$(document).ready(function() {
    
    $('body').scrollspy({target: ".navbar", offset: 50});   


      $("#main_navbar a").on('click', function(event) {

        if (this.hash !== "") {
    
          event.preventDefault();

          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
              
            window.location.hash = hash;
          });
        }
      });
    
    $('.fadein').each( function(i){
            
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height() + 50;

        if( bottom_of_window > bottom_of_object ){

            $(this).animate({'opacity':'1'},500);

        }

    }); 
    
    $(window).scroll( function(){
    
        $('.fadein').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 60;
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});