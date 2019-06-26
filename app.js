console.log('Running');
$('.modal-button').click(function(e){
    console.log('clicky');
    $('#myModal').fadeOut(slideOpen());
});

function slideOpen(){
    //$('#tada').load("https://jernical.github.io/Ding-su/");
    $('#stage').css({"justify-content": "space-between"});
    $('#rtdoor').animate({'left':'100%'}, "slow");
    $('#ltdoor').animate({'right':'100%'}, "slow");
    zoomStage();
};

function zoomStage(){
    $('#stage').animate({'width': '90vw', 'height': '90vh'});
    $('#tada').animate({'width': '90vw', 'height': '90vh'});
    $('#theater-container').animate({'margin': '0 auto', 'width': '90vw', 'height': '90vh'});
    loadFullSite();
};

function loadFullSite(){
    $('body').fadeOut(500, function(){
        window.location = 'https://jernical.github.io/Ding-su/'
    });
};