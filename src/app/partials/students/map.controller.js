(function(){

  'use strict';

  angular
  .module('app.partials')
  .controller('mapController', mapController) ;

  mapController.$inject = ['$state','$stateParams', 'studentsService'];
  function mapController($state, $stateParams, studentsService){

    var vm = this;

    vm.user = {} ;

    vm.icon = {
        scaledSize: [32, 47],
        url: 'http://www.cliparthut.com/clip-arts/339/location-pin-icon-339124.png'
    }

    activate() ;

    function activate(){

      vm.user = studentsService.getOne($stateParams.id);

      if ( ! $stateParams.id || ! vm.user ) {
          $state.go('students')
      }

    }

  } ;

})();
