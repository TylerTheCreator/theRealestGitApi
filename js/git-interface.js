var apiKey = require('./../.env').apiKey;
var showPicture = require('./../js/git-interface.js').showPicture;


$(document).ready(function() {
  $('#showUser').click(function(e) {
    e.preventDefault();
    var username = $('#username').val();
    var info   = 'https://api.github.com/users/'+ username;
    var repoInfo  = 'https://api.github.com/users/' + username + '/repos';
    $('#username').val("");
      $.getJSON(info + '?access_token=' + apiKey + '&per_page=90').then(function(response){
        $('.account').append("<img src=" + response.avatar_url + "/>");
        // $('.account').append("<p>" +'UserName: ' + username + "</p>");
        $('.account').append("<p>" +"FullName: " + response.name + "</p>");
        $('.account').append("<p>" +"Location: " + response.location+ "</p>");
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    $.getJSON(repoInfo + '?access_token=' + apiKey).then(function(repo){
      for (var c = 0; c <= repo.length; c++) {
        if (repo[c].name !== null || repo[c].name !== "") {
          $('.account').append(" <Br>Repository: " + repo[c].name);
        } else {
          $('.account').append(" <Br>Repository: N/A");
        }
        if (repo[c].description !== null ||repo[c].description !== "") {
          $('.account').append(" <Br>Description: " + repo[c].description);
        } else {
          $('.account').append(" <Br>Description: N/A");
        }
        if (repo[c].description !== null) {
          $('.account').append(" <br>Languange: " + repo[c].language + "<hr>");
        } else {
          $('.account').append(" <br>Languange: N/a <hr>");
        }
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
