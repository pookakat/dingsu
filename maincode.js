$('body').fadeIn(1000);

$(document).ready(function() {
    $('#title-text').animate({'margin-left': '0'}, 'slow');
    $('#main-site').load('http://google.com');
});

$('#menu').click(function(){
    $('#site-menu').fadeIn(300);
    $('.menu-title').css({'border-bottom': '1px solid white'});
})


