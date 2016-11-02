(function(){

  'use strict';

  angular
    .module ('app.services')
    .service('studentsService', studentsService ) ;

    studentsService.$inject = ['resolveService'] ;

    function studentsService(resolveService) {

      var users = [];

      var service = {
        getAll : getAll,
        getOne : getOne
      } ;

      return service;

      function getOne (id ){
        for (var i in users ){
          if(id == users[i].id){
            return users[i];
            break;
          }
        }
      }

      function getAll ( callback ) {
        return resolveService
          .get('http://jsonplaceholder.typicode.com/users')
          .then(function(response){
             users = response.data ;
             callback( users )
          }) ;
      }

    }
})() ;
