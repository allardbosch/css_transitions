$('*[data-animation]').addClass('pre-animation');
$(document).ready(function(){
    $.each($('*[data-animation]'), function(){
        if($(this).attr('data-animation') === 'fade'){
            var $anim = $(this).attr('data-animation')
            $('*[data-animation]').addClass('animation--'+$anim);
        }
        if($(this).attr('data-animation-dir')){
            var $dir = $(this).attr('data-animation-dir')
            $(this).addClass('animation--dir-'+$dir);
        }
        if($(this).attr('data-animation-trigger')){
            var $trigger = $(this).attr('data-animation-trigger')
            $(this).addClass('animation--trigger-'+$trigger);
            var $triggerElement = $(this);
            if($trigger === 'onLoad'){
                setTimeout(function(){
                    $triggerElement.removeClass('pre-animation');
                    $triggerElement.addClass('animation');
                }, 1000);
            }
            $(window).scroll(function(){
                var top_of_element = $triggerElement.offset().top;
                var bottom_of_element = $triggerElement.offset().top + $triggerElement.outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();
                    if($trigger === 'isVisible'){
                        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                            $triggerElement.removeClass('pre-animation');
                            $triggerElement.addClass('animation');
                        }
                    }
            });
            if($(this).attr('data-animation-delay')){
                var $delay = $(this).attr('data-animation-delay')/1000+"s";
                $(this).css({
                    transitionDelay: $delay
                });
            }
        }
    });
});
