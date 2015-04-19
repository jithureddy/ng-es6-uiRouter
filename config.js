System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "app/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.0-build.3962+sha.fe9cd9d",
    "angular/router": "github:angular/router@0.5.3",
    "babel": "npm:babel-core@5.1.5",
    "babel-runtime": "npm:babel-runtime@5.1.5",
    "core-js": "npm:core-js@0.8.3",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:core-js@0.8.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

