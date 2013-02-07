(function($) {
$(function() {

    /* немножко быдлокода */

    $(".rocket").hover(
        function(){
            if ($(this).css('right') == '40px') {
                $(this).animate({top:"-=90px", right:"-=90px"}, 300, function(){
                    $(this).css({top:"120px", right:"auto", left:"-90px"}).animate({top:"-=100px", left:"+=130px"});
                });
            } else if ($(this).css('left') == '40px') {
                $(this).animate({top:"-=100px", left:"+=100px"}, 300, function(){
                    $(this).css({display:"none"}).css({left:"auto", right:"40px", top:"20px"}).fadeIn(300);
                });
            }
        },
        function(){}
    )

})
})(jQuery)