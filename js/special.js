
$(document).ready(function(){
    var font_size = 'font_small';
    var lineheight_size = 'lineheight_regular';
    var color_scheme = 'black_white';
    var images = 'images_on';

    if ( $.cookie('special') == "1") {
        $('body').addClass( 'special '+ $.cookie('font_size')+' '+ $.cookie('lineheight_size')+' '+ $.cookie('color_scheme')+' '+$.cookie('images'));
    }
    if ( $.cookie('font_size') == null) {
        $.cookie('font_size', font_size);
        $.cookie('lineheight_size', lineheight_size);
        $.cookie('color_scheme', color_scheme);
        $.cookie('images', images);
    }
    $(document).on('click','.blind_mode', function(){
        $('body').toggleClass('special '+font_size+' '+lineheight_size+' '+color_scheme+' '+images);
        if (typeof $.fn.sticky !== 'undefined') {
            $(".js-stick").unstick();
        }
        if ( $('body').hasClass('special') ){
            $.cookie('special', 1);
        } else {

            $.cookie('special', null);
        }

    });

    function update_style(){
        console.log('function update_style()');
        $('body').removeClass();
        $('body').toggleClass('special '+font_size+' '+lineheight_size+' '+color_scheme+' '+images);
        if (typeof $.fn.sticky !== 'undefined') {
            $(".js-stick").unstick();
        }
        if (typeof $.fn.masonry !== 'undefined') {

            setTimeout(function() {

            $(".grid").masonry({
                itemSelector: ".news-page-item",
                columnWidth: '.news-page-item',
                gutter: 7,
                //percentPosition: true
            });
            $(".grid_i").masonry({
                itemSelector: ".pd-page-list-item",
                columnWidth: ".pd-page-list-item",
                gutter: 7,
                //percentPosition: true
            });
            }, 500);
        }
        setTimeout(function() {
        if( $('.dir-rightside').outerHeight() > $('.direcrion-block').outerHeight() ) {

            if( !$('.poly-left').length ){
                $('.direcrion-block:first').outerHeight($('.dir-rightside').outerHeight() + 150);
            }

        }
        }, 500);
        $.cookie('font_size', font_size);
        $.cookie('lineheight_size', lineheight_size);
        $.cookie('color_scheme', color_scheme);
        $.cookie('images', images);

    }
    //FONT
    $('.js-font').click(function(){
        var th_size = $(this).attr('data-fontsize');

        font_size = 'font_'+th_size;

        update_style();

    });

    //IMAGES

    $('.js-images').click(function(){
        var th_val = JSON.parse($(this).attr('data-on'));

        if ( th_val ) {

            images = 'images_off'
            $('.js-images').attr('data-on','false').text('Выкл');

        }else{
            images = 'images_on'
            $('.js-images').attr('data-on','true').text('Вкл');

        }
        update_style();

    });


    //SCHEME

    $('.js-scheme').click(function(){

        var th_scheme = $(this).attr('data-scheme');

        if( th_scheme == 'bw' ){
            color_scheme = 'black_white'
        }
        if( th_scheme == 'wb' ){
            color_scheme = 'white_black'
        }
        if( th_scheme == 'yb' ){
            color_scheme = 'yellow_blue'
        }

        update_style();

    });


    //Line height

    $('.js-lineheight').click(function(){
        var th_lh = $(this).attr('data-lineheight');

        if( th_lh == 'regular' ){
            lineheight_size = 'lineheight_regular'
        }
        if( th_lh == 'incr' ){
            lineheight_size = 'lineheight_incr'
        }
        update_style();
    })
    
});





