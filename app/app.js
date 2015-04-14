import angular from 'angular';
import ngNewRouter from 'angular/router';

//function for directives registration http://www.michaelbromley.co.uk/blog/350/exploring-es6-classes-in-angularjs-1-x#_section-directives
import directiveFactory from 'app/directivefactory';

//import all custom elements
import HomeController from 'components/home/home';
import HomeService from 'services/homeservice';
import HomeDirective from 'directives/homedirective';
import DifferentController from 'components/different/different';


angular.module('testApp', ['ngNewRouter']) //initializes main module
  .controller('AppController', ['$router', AppController]) //and custom elements with deps
  .service('HomeService', ['$http', HomeService])
  .directive('homeDirective', directiveFactory(['$interval', HomeDirective])) //special func for directive
  .controller('DifferentController', ['$routeParams', DifferentController])
  .controller('HomeController', ['HomeService', HomeController]);


// config routes
function AppController ($router) {
  $router.config([
    { path: '/', redirectTo: '/home' },
    { path: '/home', component: 'home' },               //component is just a template + controller
    { path: '/different/:id', component: 'different' }  // in 'components' folder
  ]);
}