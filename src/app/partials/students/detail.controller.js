(function(){

  'use strict';

  angular
  .module('app.partials')
  .controller('studentsDetailController', studentsDetailController) ;

  studentsDetailController.$inject = ['$state','$stateParams', 'studentsService'];
  function studentsDetailController($state, $stateParams, studentsService){

    var vm = this;
    vm.user = {} ;

    activate() ;

    function activate(){
      vm.user = studentsService.getOne($stateParams.id);
      if ( ! $stateParams.id || ! vm.user ) {
          $state.go('students')
      }
    }

  } ;

})();
