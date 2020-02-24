 $(document).ready( function() {
    $(".Work").hide();
    var topOfOthDiv = $("#tyot").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { 
            $(".Work").show(); 
        }else{
            $(".Work").hide();
          }
    });
}); 
