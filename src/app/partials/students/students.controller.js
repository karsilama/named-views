(function(){

  'use strict';

  angular
  .module('app.partials')
  .controller('studentsController', studentsController) ;

  studentsController.$inject = ['studentsService'];
  function studentsController(studentsService){

    var vm = this;

    vm.users = [];

    activate() ;

    function activate(){

      studentsService
        .getAll(function(users){
          vm.users = users ;
        })
    }
  } ;

})();
