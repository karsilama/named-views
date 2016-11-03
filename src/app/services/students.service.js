(function(){

  'use strict';

  angular
    .module ('app.services')
    .service('studentsService', studentsService ) ;

    studentsService.$inject = ['resolveService'] ;

    function studentsService(resolveService) {

      var students = [];

      var service = {
        getAll : getAll,
        getOne : getOne
      } ;

      return service;

      function getOne (id ){
        for (var i in students ){
          if(id == students[i].id){
            return students[i];
            break;
          }
        }
      }

      function getAll ( callback ) {
        return ( new resolveService() )
          .get('http://jsonplaceholder.typicode.com/users')
          .then(function(all){
             students = all ;
             callback( students )
          }) ;
      }

    }
})() ;
