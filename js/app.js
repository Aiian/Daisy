$(document).ready(function(){

    // functions //

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




  //scrolling

    var position_1 = $('#home').offset().left;
    var position_2 = $('#menu').offset().left;
    var position_3 = $('#galeria').offset().left;
    var position_4 = $('#historia').offset().left;
    var position_5 = $('#atelier').offset().left;
    var position_6 = $('#kontakt').offset().left;



    var leftPos = position_2 - position_1;


    $(window).on('resize', function(){
        position_1 = $('#home').offset().left;
        position_2 = $('#menu').offset().left;
        position_3 = $('#galeria').offset().left;
        position_4 = $('#historia').offset().left;
        position_5 = $('#atelier').offset().left;
        position_6 = $('#kontakt').offset().left;

        leftPos = position_2 - position_1;
    });

    var wheelCounter = 0;

        $(window).on('mousewheel', function (){
            event.preventDefault();

            wheelCounter += 1;
            console.log(wheelCounter);
            var delta = - (Math.max(-1, Math.min(1, (window.event.wheelDelta || -window.event.detail))));
            var scrollDist = 0;
            if (delta > 0) {
                 scrollDist = $('#visibleRange').scrollLeft() + leftPos;
            } else {
                 scrollDist = $('#visibleRange').scrollLeft() - leftPos;
            }
            if (wheelCounter == 1) {
                scrolling(scrollDist)
            }
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
    $('#linkAtelier').on('click', function () {
        scrolling(position_5-position_1)
    });
    $('.linkKontakt').on('click', function () {
        scrolling(position_6-position_1)
    });




    function scrolling(distance) {
        $('#visibleRange').animate({
            scrollLeft: distance
        }, function () {
            wheelCounter = 0
        })
    }

// gallery

    var gallery = [
        ['images/food/pomodore.jpg', 'Super podpis nr1'],
        ['images/food/sandwich2.jpg', 'Super ggf nr2'],
        ['images/food/pomodore.jpg', 'Super podsgpis nr3'],
        ['images/food/sandwich2.jpg', 'Super dg nr4'],
        ['images/food/pomodore.jpg', 'Super podpagis nr5'],
        ['images/food/sandwich2.jpg', 'Super podddpis nr6'],
        ['images/food/sandwich2.jpg', 'Super podddpis nr6'],
        ['images/food/sandwich2.jpg', 'Super podddpis nr6']
    ];

    $('.currentPhoto').attr('src',gallery[0][0]);
    $('.currentParagraph').text(gallery[0][1]);

    var counter = 0;

    $('#galleryRight').on('click',
        function (){
            counter += 1;
            if (counter === gallery.length) {
                counter = 0;
            }
            photoChange();
    });

    $('#galleryLeft').on('click',
        function (){
            counter -= 1;
            if (counter === -1) {
                counter = gallery.length - 1;
            }
            photoChange();

        });

    $( "#galeria img" ).on('click',
        function() {
            var clicks = $(this).data('clicks');
            if (clicks) {
                $(this).parent('.flex-col').transition({scale:(1)});
                $(this).parent('.flex-col').parent().parent().transition({scale:(1)});

            } else {
                $(this).parent('.flex-col').transition({scale:(5.5)});
                $(this).parent('.flex-col').parent().parent().transition({scale:(0.3)});

            }
            $(this).data("clicks", !clicks);
        });

    $("#galeria img").hover(
        function() {
            $(this).transition({scale:(1.05)});

        }, function() {
            $(this).transition({scale:(1)})
        }
    );

    for (var i = 0; i < gallery.length; i++){
        $('.bulletContainer').append('<div class="bullet"></div>');
    }

    $('.bullet').on('click',function(){
        counter = $(this).index();
        photoChange();
    });


function photoChange() {
    $('.currentPhoto').fadeOut(function(){
        $('.currentPhoto').attr('src', gallery[counter][0]);
        $('.currentParagraph').text(gallery[counter][1]);
        $('.currentPhoto').fadeIn();

        $('.bullet').css({backgroundColor: 'white'})
        $('.bullet:eq(' + counter + ')')
            .fadeOut(function(){
                $(this).css({backgroundColor: '#005f50'})
            }).fadeIn();
    });
}


//atelier list

    $('.wystawa').on('click', function(){
        var thisP =  $(this).children('.description');
        thisP.slideToggle('slow');
        $('.description').not(thisP).slideUp('slow')
    });

    $( ".wystawa" ).hover(
        function() {
            $(this).transition({scale:(1.05)},100);

        }, function() {
            $(this).transition({scale:(1)});

        }
    );

















});