
$(document).ready(function(){

 $("#myCarousel").carousel();
    $(".item1").addClass('selectItem');
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
        $(".item1").addClass('selectItem');
        $(".item2").removeClass('selectItem');
        $(".item3").removeClass('selectItem');
        $(".item4").removeClass('selectItem');
        $(".item5").removeClass('selectItem');


    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
        $(".item1").removeClass('selectItem');
        $(".item2").addClass('selectItem');
        $(".item3").removeClass('selectItem');
        $(".item4").removeClass('selectItem');
        $(".item5").removeClass('selectItem');

    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
        $(".item1").removeClass('selectItem');
        $(".item2").removeClass('selectItem');
        $(".item3").addClass('selectItem');
        $(".item4").removeClass('selectItem');
        $(".item5").removeClass('selectItem');

    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
        $(".item1").removeClass('selectItem');
        $(".item2").removeClass('selectItem');
        $(".item3").removeClass('selectItem');
        $(".item4").addClass('selectItem');
        $(".item5").removeClass('selectItem');

    });
    $(".item5").click(function(){
        $("#myCarousel").carousel(4);
        $(".item1").removeClass('selectItem');
        $(".item2").removeClass('selectItem');
        $(".item3").removeClass('selectItem');
        $(".item4").removeClass('selectItem');
        $(".item5").addClass('selectItem');

    });
    var currentIndex;
    var currentFace;
    var totalItems;
    $("#myCarousel").bind('slide.bs.carousel', function (e) {
        $(".item1").removeClass('selectItem');
        $('.'+currentFace).removeClass('selectItem');
        totalItems = $('.item').length;
        currentIndex = $('div.active').index() + 2;
        if (currentIndex>totalItems) {
            currentIndex=1
        }
         currentFace = 'item'+currentIndex;
        $('.'+currentFace).addClass('selectItem');
    })






});