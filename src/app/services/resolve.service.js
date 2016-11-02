(function(){

  'use strict';

  angular.module ('app.services')

      .service('resolveService', resolveService ) ;

      resolveService.$inject = ['$http','$q'] ;

      function resolveService($http, $q) {

        var factory = {
          get : get
        } ;

        return factory;

        function get(url, method) {

          var defered = $q.defer();
          var promise = defered.promise;

          $http({
            url : url,
            method : method ? method : 'GET'
          })
          .then(function(students){
            defered.resolve(students) ;
          }, function(error){
            defered.reject(error) ;
          })

          return promise ;
        }

      }
})() ;
