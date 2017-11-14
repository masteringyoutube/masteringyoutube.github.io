$(document).ready(function(){

  $("#myCarousel").carousel();
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);

    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);

    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);

    });

// Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });

});

$(document).ready(function(){

  $("#myCarousel2").carousel();
    $(".item1").click(function(){
        $("#myCarousel2").carousel(0);

    });
    $(".item2").click(function(){
        $("#myCarousel2").carousel(1);

    });
    $(".item3").click(function(){
        $("#myCarousel2").carousel(2);

    });

// Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel2").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel2").carousel("next");
    });

});




$(document).ready(function(){

  $("#myCarousel3").carousel();
    $(".item1").click(function(){
        $("#myCarousel3").carousel(0);

    });
    $(".item2").click(function(){
        $("#myCarousel3").carousel(1);

    });
    $(".item3").click(function(){
        $("#myCarousel3").carousel(2);

    });
    $(".item4").click(function(){
        $("#myCarousel3").carousel(3);

    });
    $(".item5").click(function(){
        $("#myCarousel3").carousel(4);

    });

// Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel3").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel3").carousel("next");
    });

});