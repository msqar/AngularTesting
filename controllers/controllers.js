var demoApp = angular.module('demoApp', ['ngRoute']);
		
	demoApp.config(function ($routeProvider) {
		$routeProvider
			.when('/view1',
				{
					controller: 'SimpleController',
					templateUrl: 'partial/view1.htm'
				})
			.when('/view2',
				{
					controller: 'SimpleController',
					templateUrl: 'partial/view2.htm'
				})
			.when('/todos',
				{
					controller: 'ToDoController',
					templateUrl: 'partial/todo.htm'
				})
			.when('/password',
				{
					controller: 'PasswordController',
					templateUrl: 'partial/password.htm'
				})
			.otherwise({ redirectTo: '/view1'});
});

	// This is another way of doing controllers
		//var controllers = {};
		//controllers.SimpleController = function ($scope) {};
		//demoApp.controller(controllers);

demoApp.controller('SimpleController', function ($scope) {
	$scope.customers = [
			{name:'John Smith',city:'Phoenix'}, 
			{name:'John Doe',city:'Dallas'}, 
			{name:'Jane Doe',city:'New York'}
	];

	$scope.addCustomer = function() {
		this.customers.push(
		{
			name: this.newCustomer.name, 
			city: this.newCustomer.city
		});
	};

});	

function ToDoController($scope) {
	$scope.todos = [
			{task: 'Go shopping', done: false},
			{task: 'Feed pet', done: true},
			{task: 'Make lunch', done: false}
		];

	$scope.getToDoListLength = function () {
		return this.todos.length;
	};

	$scope.addToDo = function () {
		var exists = false;
		for(var i=0; i < $scope.todos.length;i++) {
			if($scope.todos[i].task == $scope.newToDoText) {
				exists = true;
			}
		}

		if($scope.newToDoText && !exists) {
			$scope.todos.push(
			{
				task: $scope.newToDoText,
				done: $scope.newToDoDone
			});	
		}else{
			alert('That task already exists');
		}				
	};

	$scope.alertTask = function (task) {
		alert('You have clicked on "' + task + '"');
	};

	$scope.removeTask = function (task) {
		for(var i=0; i < $scope.todos.length;i++) {
			if($scope.todos[i].task === task) {
				$scope.todos.splice(i, 1);
				break;
			}
		}
	}
}

function PasswordController($scope) {
	$scope.grade = function() {
		var size = $scope.password.length;
		if(size > 7) {
			$scope.strength = "Strong";
			$scope.color = "#00CC00"
		}else if(size > 3) {
			$scope.strength = "Medium";
			$scope.color = "#CC9900"
		}else if(size > 0){
			$scope.strength = "Weak";
			$scope.color = "#CC0000"
		}else {
			$scope.strength = "";
		}
	};

	$scope.sayHi = function() {
		alert("I'm saying Hi!");
	};

	$scope.callHome = function(message) {
		alert("Called home! " + message);
	};
}

