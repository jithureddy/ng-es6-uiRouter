class DifferentController{
  constructor($routeParams){
    this.id = $routeParams.id;
  }
}

export default ['DifferentController', ['$routeParams', DifferentController]];