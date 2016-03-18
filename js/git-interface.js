var apiKey = require('./../.env').apiKey;



$(document).ready(function(){
  $('#showUser').click(function(){
    var user = $('#username').val();
    var
    $('#username').val("");
    $.get('https://api.github.com/users/' + user + '?access_token=' + apiKey).then(function(response){
    $('.showUser').text("the repo is " + user + ".");
    });
  });
});
