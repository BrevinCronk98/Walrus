$(document).ready(function() {
    $(".clickable").click(function() {
        
        $("#walrus-showing").slideToggle();
        $("#walrus-hidden").slideToggle();
        
    });
    $(".test").click(function() {

        $("#testStart").toggle();
        $("#testEnd").toggle();

    });
});


