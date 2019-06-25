console.log('Running');
$('#modal-button').click(function(e){
    console.log('clicky');
    $('#myModal').fadeOut('slow', slideOpen());
});

function slideOpen(){
    console.log("This is where the flexbox will slide open the doors");
    $('#stage').css({"justify-content": "space-between"});
    $('#rtdoor').animate({'left':'100%'});
    $('#ltdoor').animate({'right':'100%'});
}