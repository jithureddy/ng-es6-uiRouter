##Note:
This is a fork from this repo https://github.com/htdt/ng-es6-router
I just changed the new router with ui router which is more mature and better for production now.
I added ui router in a way it will be so easy to replace with new router again anytime in the future when it becomes more reliable.

It is recommended for those who want to start a production project now with angular 1.4 which can be less painfully moved to angular2, as here you will use ES6, ui router using the same approach of components as angular2 router, and no $scope. 

## AngularJS 1.4 with ES6 classes and ui router
1. `npm install -g jspm gulp`
2. `npm install`
3. `jspm install`
4. `gulp serve` for development
5. `gulp build` for production

### Links
- [Angular ui Router](https://github.com/angular-ui/ui-router)
- [Using ES6 with AngularJS](https://github.com/michaelbromley/angular-es6), [one more](https://github.com/chybie/NgBabelJspm)
- [SystemJS](https://github.com/systemjs/systemjs) & [jspm](https://github.com/jspm/jspm-cli/)

### How it works
1. `System.import('app')` in index.html loads app/app.js.
2. app.js initializes main module and routes.
3. All custom elements (directives, services) with dependencies registered in app.js.
4. Route points to component (which just a template plus controller in components folder).

For simplicity all the elements are registered in app.js on one 'app' module,
but it's not recommended for large projects.

### TODO
unit & e2e tests
