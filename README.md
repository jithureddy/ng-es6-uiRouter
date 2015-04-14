## AngularJS 1.4 with ES6 classes and new router
1. `npm install -g jspm http-server`
2. `jspm install`
3. `http-server`

### Bundle project 
Run `jspm bundle-sfx --minify app/app`
then switch the DEV and PROD scripts in index.html

### Links
- [Angular New Router](https://angular.github.io/router/), [examples](https://github.com/angular/router/tree/master/examples/angular-1)
- [Using ES6 with AngularJS](https://github.com/michaelbromley/angular-es6), [one more](https://github.com/chybie/NgBabelJspm)
- [SystemJS](https://github.com/systemjs/systemjs) & [jspm](https://github.com/jspm/jspm-cli/)

### How it works
1. `System.import('app/app')` in index.html loads app/app.js.
2. app.js initializes main module and routes.
3. All custom elements (directives, services) with dependencies registered in app.js.
4. `directiveFactory` function for directives registration [why?](http://www.michaelbromley.co.uk/blog/350/exploring-es6-classes-in-angularjs-1-x#_section-directives).
5. Route points to component (which just a template plus controller in components folder).

For simplicity all the elements are registered in app.js on one 'app' module,
but it's not recommended for large projects.

### TODO
Config gulp for css processors, static collecting, dev server live reloading.