var ProgressBar = function(myBar){

	myBar.spawn = function(kwargs){
		args = {
			'min': 0,
			'max': 100,
			'color': 'rgb(255,0,0)',
			'position': [0,0],
			'width': 300,
			'height': 35,
			'border': undefined
		};

		this.args = Helpers.updateArgsWithKwargs(args, kwargs);
		this.current_value = this.args['min'];		

		this.render = function(screen){
			// Background
			screen.fillStyle = 'rgba(0,0,0,.6)';
			screen.beginPath();
			screen.rect(
				this.args['position'][0], 
				this.args['position'][1],
				this.args['width'],
				this.args['height']
			);

			screen.fill();
			if (this.args['border'] != undefined){
				screen.strokeStyle = this.args['border'];
				screen.stroke();
			}
			screen.closePath();

			// Bar
			var percent = (this.current_value) / (this.args['max'] - this.args['min']);
			screen.fillStyle = this.args['color'];
			screen.fillRect(
				this.args['position'][0]+2,
				this.args['position'][1]+2,
				percent*this.args['width'],
				this.args['height']-2
			);
		};
	};

	return (myBar);

}(ProgressBar || {});