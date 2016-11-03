(function(){

  'use strict';

  angular

    .module('app.core.routing')

    .config ( configFn ) ;

    configFn.$inject = ['$stateProvider', '$urlRouterProvider',];

    function configFn($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/students");

      $stateProvider

        .state('students', {
          url : '/students',
          templateUrl : '/app/partials/students/students.html',
          controller : 'studentsController',
          controllerAs : 'studentsCtrl'
        })

        .state('students.detail', {
          url : '/detail/:id',
          views : {
            detail : {
              templateUrl : '/app/partials/students/detail.html',
              controller : 'studentsDetailController',
              controllerAs : 'studentsDetailCtrl'
            },
            map : {
              templateUrl : '/app/partials/students/map.html',
              controller : 'mapController',
              controllerAs : 'mapCtrl'
            }
          },
        })

        ;

      }
})() ;
