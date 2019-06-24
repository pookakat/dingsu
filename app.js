console.log('Running');
$('#modal-button').click(function(e){
    console.log('clicky');
    $('#myModal').fadeOut('slow', slideOpen());
});

function slideOpen(){
    console.log("This is where the flexbox will slide open the doors");
}