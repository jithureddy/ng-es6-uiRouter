class DifferentController{
  constructor($stateParams){
    this.id = $stateParams.id;
  }
}

DifferentController.$inject = ['$stateParams'];
export {DifferentController};