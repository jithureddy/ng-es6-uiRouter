import angular from 'angular';
import uiRouter from 'ui-router';

import {HomeController} from 'components/home/home';
import HomeService from 'services/homeservice';
import HomeDirective from 'directives/homedirective';
import {DifferentController} from 'components/different/different';

// Import gets arrays with name, dependencies and function.
// eg. ['HomeService', ['$http', HomeService]]
// ... is ES6 future that turns array into arguments.
// ...[a,b,c] -> a,b,c

angular.module('testApp', ['ui.router'])
  .config(routingConfigs)
  .service(...HomeService)
  .directive(...HomeDirective)
  .controller('HomeController', HomeController)
  .controller('DifferentController', DifferentController);

function routingConfigs($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "app/components/home/home.html",
      controller:  'HomeController as home'
    })
    .state('different', {
      url: "/different/:id",
      templateUrl: "app/components/different/different.html",
      controller: 'DifferentController as different'
    });
};

