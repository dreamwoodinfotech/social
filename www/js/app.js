// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("share",function($ionicPlatform,$scope,$cordovaSocialSharing){
  $scope.sharetoall = function(){
    console.info("in social share button");
    /*var message = "Hi this from ionic";
    var image = "img/ionic.png";
    var link = "https://www.thepolyglotdeveloper.com";*/

      /*$cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
          $cordovaSocialSharing.shareViaTwitter(message, image, link);
          console.warn("here twitter called");
          alert("posted");
      }, function(error) {
          alert("Cannot share on Twitter");
      });*/
      alert('started shares');
    $cordovaSocialSharing.share('Hi this from ionic','img/ionic.png',null,'https://www.thepolyglotdeveloper.com') // Share via native share sheet
      .then(function(result) {
        alert("shared on all"+result);
      }, function(err) {
        alert("Cannot share on alll"+err);
    });
alert("finishes");


  };
})