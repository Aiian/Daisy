$(document).ready(function(){

    // functions //







    //$('main .flex-col:eq(0)').animate({left:'0'},2500);
    //$('main .flex-col:last-child').animate({right:'0'},2500)


    $( "header li" ).hover(
        function() {
            $(this).css({
                borderBottom: '3px solid #005f50',
                backgroundColor: 'rgba(220,220,220,0.8)'
            })
        }, function() {
            $(this).css({
                borderBottom: '3px solid transparent',
                backgroundColor: 'rgba(240,240,240,0.5)'
            })
        }
    );

    $( ".thumbnail" ).hover(
        function() {
            $(this).find('.outerFancyBorder').transition({scale:(1.4)});
            $(this).find('.textContainer').children('p').slideDown('slow');
            $(this).find('.textContainer').children('h3').transition({scale:(1.3)})
        }, function() {
            $(this).find('.outerFancyBorder').transition({scale:(1.2)});
            $(this).find('.textContainer').children('p').slideDown('slow');
            $(this).find('.textContainer').children('h3').transition({scale:(1)})
        }
    );

    $( "img" ).hover(
        function() {
            $(this).transition({scale:(1.4)});

        }, function() {
            $(this).transition({scale:(1)});
        }
    );








  //scrolling

    var position_1 = $('#home').offset().left;
    var position_2 = $('#menu').offset().left;
    var position_3 = $('#galeria').offset().left;
    var position_4 = $('#historia').offset().left;

    var leftPos = position_2 - position_1;


    $(window).on('resize', function(){
        position_1 = $('#home').offset().left;
        position_2 = $('#menu').offset().left;
        position_3 = $('#galeria').offset().left;
        position_4 = $('#historia').offset().left;

        leftPos = position_2 - position_1;
    });


        $(window).on('mousewheel', function (){
            event.preventDefault();
            var delta = - (Math.max(-1, Math.min(1, (window.event.wheelDelta || -window.event.detail))));
            var scrollDist = 0;
            if (delta > 0) {
                 scrollDist = $('#visibleRange').scrollLeft() + leftPos;
            } else {
                 scrollDist = $('#visibleRange').scrollLeft() - leftPos;
            }
           scrolling(scrollDist)
           });


    $('#linkHome').on('click', function () {
      scrolling(0)
    });

    $('#linkMenu').on('click', function () {
       scrolling(position_2-position_1)
    });

    $('#linkGaleria').on('click', function () {
      scrolling(position_3-position_1)
    });

    $('#linkHistoria').on('click', function () {
       scrolling(position_4-position_1)
    });


function scrolling (distance) {
    $('#visibleRange').animate({
        scrollLeft: distance
    })
}



  //changing background

    //var body = $('body');
    //console.log(body)
    //var backgroundList = [
    //    'url("./images/jumbojumbo.jpg")',
    //    'url("./images/homeBack.jpg")',
    //    'url("./images/logo.jumbojumbo.jpg")'
    //
    //];
    //var current = 0;
    //
    //function nextBackground() {
    //    body.css({
    //    backgroundImage: backgroundList[current = ++current % backgroundList.length]
    //});
    //    setTimeout(nextBackground, 1000);
    //}
    //
    //setTimeout(nextBackground, 1000);
    //body.css({
    //    backgroundImage: backgroundList[0]
    //})



























});