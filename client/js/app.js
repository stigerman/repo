var myApp = angular.module('demoapp', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    templateUrl: '/client/templates/management.html',
    controller: 'HomeCtrl'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  
  
  
  
  
  
});
