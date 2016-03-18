(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = '17b4bf456ad0fb7e6949ea20abe0d426f784b450';

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}]},{},[2]);
