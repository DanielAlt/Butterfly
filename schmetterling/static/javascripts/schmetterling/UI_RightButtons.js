var RightButtons = function(myButtons){

	myButtons.button = function(label, pos, rad){
		this.label = label;
		this.position = pos;
		this.active = false;
		this.radius = rad
	}

	myButtons.spawn = function(kwargs){
		args = {
			'buttons': [
				new myButtons.button('A', [5,5], 20), 
				new  myButtons.button('B', [55,5], 20)
			]
		};
		this.args = Helpers.updateArgsWithKwargs(args, kwargs);

		this.handle_events = function(event){
			var mouse_pos = Helpers.getCursorOffset(event);
			if (event.type == 'mousedown'){
				for (var i=0; i < this.args['buttons'].length; i++){
					if (
						Collision.collidesWithCircle(
							this.args['buttons'][i].radius,
							this.args['buttons'][i].position,
							mouse_pos
					)){
						this.args['buttons'][i].active = true;
					};
				}
			} else if (event.type == 'mouseup'){
				for (var i=0; i < this.args['buttons'].length; i++){
					this.args['buttons'][i].active = false;;
				};
			}

		};

		this.update = function(){

		};

		this.render = function(screen){
			for (var i=0; i < this.args['buttons'].length; i++){
				if (this.args['buttons'][i].active){
					screen.fillStyle = 'rgba(200,200,200,.6)';
				} else {
					screen.fillStyle = 'rgba(255,255,255,.6)';
				}
				screen.beginPath();
				screen.arc(
					this.args['buttons'][i].position[0],
					this.args['buttons'][i].position[1], 
					this.args['buttons'][i].radius,
					0,
					2 * Math.PI, 
					false
				);
				screen.fill();
				screen.closePath();
				screen.font = '32px bettyregular';
				screen.fillStyle = 'rgb(0,0,0)';
				screen.fillText(
					this.args['buttons'][i].label,
					this.args['buttons'][i].position[0]-9,
					this.args['buttons'][i].position[1]+5
				);
			}
		}

	}

	return (myButtons);

}(RightButtons || {});