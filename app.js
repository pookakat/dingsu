console.log('Running');
$('#modal-button').click(function(e){
    console.log('clicky');
    $('#myModal').fadeOut(slideOpen());
});

function slideOpen(){
    $('#tada').load("https://jernical.github.io/Ding-su/");
    $('#stage').css({"justify-content": "space-between"});
    $('#rtdoor').animate({'left':'100%'}, "slow");
    $('#ltdoor').animate({'right':'100%'}, "slow");
}