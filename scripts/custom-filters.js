demoApp.filter('reverse', function() {
	return function(text) {
		if(text == undefined) {
			text = "";
		}
		return text.split("").reverse().join("");
	}
}); 