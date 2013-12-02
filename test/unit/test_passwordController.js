var $scope = {};
var pc = $controller('PasswordController', { $scope: $scope });
$scope.password = 'abc';
$scope.grade();
expect($scope.strength).toEqual('Weak');