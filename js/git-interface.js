var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#showUser').click(function(e) {
    e.preventDefault();
    var username = $('#username').val();
    var info   = 'https://api.github.com/users/'+ username;
    var repoInfo  = 'https://api.github.com/users/' + username + '/repos';
    $('#username').val("");
      $.getJSON(info + '?access_token=' + apiKey + '&per_page=90').then(function(response){
        $('.profile').append("<img src=" + response.avatar_url + "/>");
        $('.profile').append("<p>" +'UserName: ' + username + "</p>");
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    $.getJSON(repoInfo + '?access_token=' + apiKey + '').then(function(repo){
      for (var c = 0; c <= repo.length; c++) {
        if (repo[c].name !== null || repo[c].name !== "") {
          $('.profile').append(" <Br>Repository: " + repo[c].name);
        } else {
          $('.profile').append(" <Br>Repository: N/A");
        }
        if (repo[c].description !== null ||repo[c].description !== "") {
          $('.profile').append(" <Br>Description: " + repo[c].description);
        } else {
          $('.profile').append(" <Br>Description: N/A");
        }
        if (repo[c].description !== null) {
          $('.profile').append(" <Br>Languange: " + repo[c].language + "<hr>");
        } else {
          $('.profile').append(" <Br>Languange: N/a <hr>");
        }
      }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
