angular.module("toDoList", [])
    .controller("ctrl", function($scope){
        $scope.input = "";
        $scope.tasksArray = ["first task", "second task"];
        $scope.addTask = function () {
            if($scope.input){
                $scope.tasksArray.push($scope.input);
                $scope.input = "";
            }
            else {
                alert("No text!");
            }

            $scope.deleteItem = function(item) {
                let index = $scope.tasksArray.indexOf(item);
                console.log(index);
                $scope.tasksArray.splice(index, 1)
            };
        }
    });
