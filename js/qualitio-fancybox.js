$(function(){
    $("#menu-puzzle-00").fancybox({
        'titlePosition'     :'inside',
        'transitionIn'      :'elastic',
        'transitionOut'     :'none',
        'autoScale'         :false,
        'autoDimensions'    :false,
        'hideOnContentClick':true,
        'width'             :'760',
        'height'            :'390',
    });

    $("#menu-puzzle-01").fancybox({
        'titlePosition'     :'inside',
        'transitionIn'      :'elastic',
        'transitionOut'     :'none',
        'autoScale'         :false,
        'autoDimensions'    :false,
        'hideOnContentClick':true,
        'width'             :'760',
        'height'            :'300',
    });

    $("#menu-puzzle-10").fancybox({
        'titlePosition'     :'inside',
        'transitionIn'      :'elastic',
        'transitionOut'     :'none',
        'autoScale'         :false,
        'autoDimensions'    :false,
        'hideOnContentClick':true,
        'width'             :'760',
        'height'            :'290',
    });

    $("#menu-puzzle-11").fancybox({
        'titlePosition'     :'inside',
        'transitionIn'      :'elastic',
        'transitionOut'     :'none',
        'autoScale'         :false,
        'autoDimensions'    :false,
        'hideOnContentClick':true,
        'width'             :'760',
        'height'            :'290',
    });

    $("#button-overview").fancybox({
        'titlePosition'     :'inside',
        'transitionIn'      :'elastic',
        'transitionOut'     :'none',
        'autoScale'         :false,
        'autoDimensions'    :false,
        'hideOnContentClick':true,
        'width'             :'760',
        'height'            :'520',
    });

    $("#button-contact").fancybox({
        'titlePosition'     :'inside',
        'transitionIn'      :'elastic',
        'transitionOut'     :'none',
        'autoScale'         :false,
        'autoDimensions'    :false,
        'hideOnContentClick':true,
        'width'             :'660',
        'height'            :'220',
    });
});

$(function() {
    var height_wrap = 300;
    var height_content = 300;
    $('#dynamicimage img').hover(
        function(){
            var $this = $(this);
            height_wrap = $('#fancybox-wrap').height();
            height_content = $('#fancybox-content').height();
            height_content_first = $('#fancybox-content div:first').height();
            $('#fancybox-wrap').stop().animate({
                'height':'400px',
            });
            $('#fancybox-content').stop().animate({
                'height':'390px',
            });
            $("#fancybox-content div:first").stop().animate({
                'height':'390px',
            });
            $this.stop().animate({
                'width' :'500px',
                'height':'362px',
                'top'   :'0px',
                'left'  :'0px'
            });
        },
        function(){
            var $this = $(this);
            $('#fancybox-wrap').stop().animate({
                'height':height_wrap,
            });
            $('#fancybox-content').stop().animate({
                'height':height_content,
            });
            $("#fancybox-content div:first").stop().animate({
                'height':height_content,
            });
            $this.stop().animate({
                'width' :'276px',
                'height':'200px',
                'top'   :'0px',
                'left'  :'0px'
            });
        }
    );
});