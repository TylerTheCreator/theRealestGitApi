var apiKey = require('./../.env').apiKey;



$(document).ready(function(){
  $('#showUser').click(function(){
    var username = $('#username').val();
    $('#username').val("");
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $('.showUser').text("the repo is " + username + ".");
    $('.showPicture').append('<img src=' + response.avatar_url + '>' );
    $('.showRepo').text('https://api.github.com/users/' + username + '/repos')


    });
  });

});
