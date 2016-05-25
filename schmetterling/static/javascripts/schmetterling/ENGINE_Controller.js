var Controller = function(myController){

	myController.getActiveGamepads = function(){
		var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
		var active_gamepads = [];
		for (var i=0; i < gamepads.length;i++){
			if (gamepads[i] != undefined){
				active_gamepads.push(gamepads[i]);
			}
		}
		return (active_gamepads);
	};

	myController.detectControllers = function(){
		var touchenabled = false;
		var gamepadenabled = false;
		var mouseenabled = false;
		var keyboardenabled = false;
		if ('ontouchstart' in document.documentElement){
			touchenabled = true; // touch
		}
		if (myController.getActiveGamepads().length > 0){
			gamepadenabled = true; // gamepad
		}
		if ('onmousedown' in document.documentElement){
			mouseenabled = true; // mouse
		}
		if ('onkeydown' in document.documentElement){
			keyboardenabled = true; //Keyboard
		}
		return ({
			'touch': touchenabled,
			'gamepad': gamepadenabled,
			'mouse': mouseenabled,
			'keyboard': keyboardenabled
		});
	};

	myController.assignController = function(){
		var controllers = myController.detectControllers();
		if (controllers['touch']){
			return ('touch');
		} else if (controllers['gamepad']){
			return ('gamepad');
		} else if (controllers['mouse']){
			return ('mouse');
		} else if (controllers['keyboard']){
			return ('keyboard')
		}
	}

	myController.buttonPressed = function(b) {
		if (typeof(b) == "object") {
			return b.pressed;
		}
		return (b == 1.0);
	}

	return (myController);
	
}(Controller || {});