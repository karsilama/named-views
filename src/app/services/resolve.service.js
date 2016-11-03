(function(){

  'use strict';

  angular.module ('app.services')

      .service('resolveService', resolveService ) ;

      resolveService.$inject = [ '$injector', '$http', '$q' ] ;

      function resolveService( $injector, $http, $q ) {

        return function() {

          return $injector.instantiate( function() {

            this.get = get ;

          } ) ;
        }

        function get(url, method) {

          var defered = $q.defer();
          var promise = defered.promise;

          $http({
            url : url,
            method : method ? method : 'GET'
          })
          .success(function(students){
            defered.resolve(students) ;
          })
          .error( function(error){
            defered.reject(error) ;
          } ) ;

          return promise ;
        }

      }

})() ;
