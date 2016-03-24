(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = '17b4bf456ad0fb7e6949ea20abe0d426f784b450';

},{}],2:[function(require,module,exports){
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

},{"./../.env":1,"./../js/git-interface.js":2}],3:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"./../.env":1,"./../js/git-interface.js":2,"dup":2}]},{},[3]);
