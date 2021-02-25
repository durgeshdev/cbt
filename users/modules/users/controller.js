angular.module('cbtApp')
.controller("cbtController", ['StudentService',
    function(StudentService) {
        var ctrl = this;
        ctrl.searchObj = {};
        ctrl.students = [];
        ctrl.getAllStudents = function() { 
            StudentService.getAllStudents().get(ctrl.searchObj, function(response) {
                if (response.code == 200) {
                    ctrl.students = response.data;
                    // console.log('students', ctrl.students);
                } else{
                    console.log('err')
                    // toastr.error(response.message);
                }
            });
        }
        ctrl.getAllStudents();

        ctrl.myFunc = function(updateData, sub){
            StudentService.updateStudent().update(updateData, function(response) {
                if (response.code == 200) {
                    console.log('update')
                } else {
                    console.log('fail')
                }
            });
        }
    }
])