var app = angular.module('mainApp');
app.controller('CRUDController', function ($scope) {

    $scope.EmpModel = {
        Id: '',
        Salary: '',
        Name: '',
    };

    $scope.index = -1;

    $scope.EmpList = [];

    $scope.EditData = function (emp) {
       // console.log("PARAM DATA :: " + JSON.stringify(emp));
       // //console.log("INDEX :: " + $scope.index);
        var obj = $scope.EmpList[$scope.index];

//        console.log($scope.index);
//         console.log("PARAM OBJ :: " + JSON.stringify(obj));




        obj.Name = emp.Name;
        obj.Salary = emp.Salary;
          ClearModel();
        
        /*
         var id = emp.Id;
         $scope.EmpList.splice(emp.id, 1);
         var _emp = {
         Id: id,
         Name: $scope.EmpModel.Name,
         Salary: $scope.EmpModel.Salary
         };
         
         if ($scope.EmpModel.Name.length <= 0 && $scope.EmpModel.Salary.length <= 0) {
         alert('Blank data cannot be edited, put some data');
         } else {
         $scope.EmpList.push(_emp);
         ClearModel();
         }*/
    }

    $scope.BindSelectedData = function (emp, index) {
        $scope.EmpModel.Id = emp.Id;
        $scope.EmpModel.Name = emp.Name;
        $scope.EmpModel.Salary = emp.Salary;

        $scope.index = index;

    }


//    code for Adding Data
    $scope.AddData = function () {
        var edited = false;
        for (var i = 0; i < $scope.EmpList.length; i++) {
            if ($scope.EmpModel.Id == $scope.EmpList[i].Id) {
                $scope.EditData($scope.EmpModel);
                edited = true;
                break;
            }
            /*else{
             $scope.AddData();
             }*/
        }
        if (!edited) {
            var _emp = {
                Id: $scope.EmpList.length + 1,
                Name: $scope.EmpModel.Name,
                Salary: $scope.EmpModel.Salary
            };


            if ($scope.EmpModel.Name.length <= 0 && $scope.EmpModel.Salary.length <= 0) {
                alert('Data added succesfully');
            } else {


                $scope.EmpList.push(_emp);
                ClearModel();
            }
        }
    }

    //code for Deleting Data

      $scope.DeleteData = function (emp) {
        var _index = $scope.EmpList.indexOf(emp);
        $scope.EmpList.splice(_index, 1);
    }
//         if(var id=emp.Id){
//             $scope.EmpList.splice(emp.id,1);
//             var _emp={
//                 Id:id,
//                 Name:$scope.EmpModel.Name,
//                 Salary:$scope.EmpModel.Salary
//             };
//             $scope.EmpList.push(_emp);
//         }
//         else{
//             alert('No more data edited');
//         }
//         
//     }
//     
//     
//     
    //main code of edit 
//        var id = emp.Id;
//        $scope.EmpList.splice(emp.id, 1);
//        var _emp = {
//            Id: id,
//            Name: $scope.EmpModel.Name,
//            Salary: $scope.EmpModel.Salary
//        };
//        $scope.EmpList.push(_emp);
//        ClearModel();
//    }

//splice add new elements while removing old elements
//code for Update Data

    function ClearModel() {
        $scope.EmpModel.Id = '';
        $scope.EmpModel.Name = '';
        $scope.EmpModel.Salary = '';
    }
}); 