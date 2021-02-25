angular.module('cbtApp')
.factory('StudentService', ['$resource', 'APP_CONST',
    function($resource, APP_CONST) {
        return {
            getAllStudents: function() {
                return $resource('http://localhost:10010/students');
            },
            updateStudent: function () {
                return $resource('http://localhost:10010/students/:id',{id : '@_id'},{
                    update: {
                        method: 'PATCH'
                    }
                });
            }
        } 
    }
]);