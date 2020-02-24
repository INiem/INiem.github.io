 $(document).ready( function() {
    $(".Work").hide(); //hide your div initially
    var topOfOthDiv = $("#tyot").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $(".Work").show(); //reached the desired point -- show div
        }else{
            $(".Work").hide();
          }
    });
}); 
