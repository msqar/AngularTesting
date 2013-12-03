demoApp.filter('reverse', function() {
	return function(text) {
		if(text == undefined) {
			text = "";
		}
		return text.split("").reverse().join("");
	}
}); 

demoApp.filter('addTextConnections', function() {
	return function(text) {		
		if(this.abilities.length > 1) {
			var finalText = '';
			if(this.abilities[0] === text) {
			finalText = text;
			}else if(this.abilities[this.abilities.length-1] === text) {
				finalText = " and " + text;
			}else {
				finalText = ", " + text;
			}
			return finalText;
		}else{
			return text;
		} 		
	}
});