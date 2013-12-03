/*
	RESTRICTIONS (Los más usados)
	"A"
	hay que agregarle abajo: 

	"A",
	link: function() {
		alert("Do something");
	}

	Implementation: <div superman></superman>

	"E"
	template: <div>Algo aca adentro</div>

	"C"

	Iría en un class. i.e.:
	<div class="superman"></div>

	"A" es el mejor ya que se podrían concatenar directives en un mismo div sin problema.
	i.e:
	<div superman flash></div>

	'A' - <span ng-sparkline></span>
	'E' - <ng-sparkline></ng-sparkline>
	'C' - <span class="ng-sparkline"></span>
	'M' - <!-- directive: ng-sparkline -->

*/

demoApp.directive("superman", function() {
	return {
		restrict: "E",
		template: "<div>Here i am to save the day</div>"
	}
});

demoApp.directive("flash", function() {
	return {
		restrict: "A",
		template: "<span>Im so fast!!</span>"
	}
});

// If no restrict is added, "A" is the default.

demoApp.directive("enter", function() {
	return function(scope, element, attrs) {
		element.bind("mouseenter", function() {
			element.addClass(attrs.enter);
		})
	}
});

demoApp.directive("leave", function() {
	return function(scope, element, attrs) {
		element.bind("mouseleave", function() {
			// podríamos ejecutar una función de un controller desde acá ya que tenemos el scope
			//scope.sayHi(); -- del PasswordController
			//scope.$apply("sayHi()");
			//scope.$apply(attrs.enter); //pasandole como parámetro "sayHi()"
			element.removeClass(attrs.enter);
		})
	}
});

/* Adding Controllers to Directives in order to communicate with other Directives */

demoApp.directive("superhero", function() {
	return {
		restrict: 'E',
		scope: {},
		controller: function ($scope) {

			$scope.abilities = [];

			this.addStrength = function() {
				$scope.abilities.push("strength");
			}

			this.addSpeed = function() {
				$scope.abilities.push("speed");
			}

			this.addFlight = function() {
				$scope.abilities.push("flight");
			}
		},

		link: function (scope, element) {
			element.addClass("button");
			element.bind("mouseenter", function() {
				console.log(scope.abilities);
			})
		}
	}
});

demoApp.directive("strength", function() {
	return {
		require:"superhero", //require superhero controller
		link: function (scope, element, attrs, superheroController) {
			superheroController.addStrength();
		}
	}
});

demoApp.directive("speed", function() {
	return {
		require:"superhero",
		link: function (scope, element, attrs, superheroController) {
			superheroController.addSpeed();
		}
	}
});

demoApp.directive("flight", function() {
	return {
		require:"superhero", 
		link: function (scope, element, attrs, superheroController) {
			superheroController.addFlight();
		}
	}
});

// Isolated Directives

demoApp.directive("phone", function() {
	return { 
		scope: {
			dial: "&"
		},
		template: '<input type="text" ng-model="value"/>' +
				'<div class="button" ng-click="dial({message:value})">Call home!</div>'
	}
});

