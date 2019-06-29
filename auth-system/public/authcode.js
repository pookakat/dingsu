$('#submit').on('click', function(event){
    event.preventDefault();
    console.log('submitting');
    console.log($('#uName').val().trim(), $('#uPass').val().trim());
    const data = {user_name: $('#uName').val().trim(), user_pass: $('#uPass').val().trim(), super_user: false};
    console.log(data);
    $.post('/user', data);
    return false;
})