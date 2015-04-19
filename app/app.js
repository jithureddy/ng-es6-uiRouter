import angular from 'angular';
import ngNewRouter from 'angular/router';

import HomeController from 'components/home/home';
import HomeService from 'services/homeservice';
import HomeDirective from 'directives/homedirective';
import DifferentController from 'components/different/different';

// Import gets arrays with name, dependencies and function.
// eg. ['HomeService', ['$http', HomeService]]
// ... is ES6 future that turns array into arguments.
// ...[a,b,c] -> a,b,c

angular.module('testApp', ['ngNewRouter'])
  .config(['$componentLoaderProvider', SetTemplatesPath])
  .controller('AppController', ['$router', AppController])
  .service(...HomeService)
  .directive(...HomeDirective)
  .controller(...HomeController)
  .controller(...DifferentController);
    

function SetTemplatesPath ($componentLoaderProvider){
  $componentLoaderProvider.setTemplateMapping(name => `app/components/${name}/${name}.html`);
}

function AppController ($router) {
  $router.config([
    { path: '/', redirectTo: '/home' },
    { path: '/home', component: 'home' },               //component is just a template + controller
    { path: '/different/:id', component: 'different' }  // in 'components' folder
  ]);
}

