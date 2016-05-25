var Joystick = function(myJoystick){

	myJoystick.spawn = function(kwargs){
		
		var args = {
			'range': [-255, 255],
			'position': [0, 0],
			'radius': 100,
		};
		this.args = Helpers.updateArgsWithKwargs(args, kwargs);
		var stick_position = [0, 0];
		var motion_vector = [0,0];
		this.active = false;

		this.handle_events = function(event){
			
			if (event.type == 'mousedown'){
				var mouse_pos = Helpers.getCursorOffset(event);
				if (
					Collision.collidesWithCircle(
						this.args['radius'],
						this.args['position'],
						mouse_pos
				)){
					this.active = true;
				}
			} else if (event.type == 'mouseup'){
				this.active = false;
			
			} else if (event.type == 'mousemove'){
				if (this.active){
					stick_position = Helpers.getCursorOffset(event);
				};
			};
		}

		this.update = function(){
			if (this.active){

				// Get stick displacement scalar from alignment
				var delta_x = stick_position[0] - this.args['position'][0];
				var delta_y = stick_position[1] - this.args['position'][1];

				var angle = Math.atan(Math.abs(delta_y/delta_x));
				if ((delta_x > 0) && (delta_y > 0)){
					var angle_offset = 0;
				}
				if ((delta_x < 0) && (delta_y > 0)){
					var angle_offset = 90;				
				}
				if ((delta_x <0) && (delta_y < 0)){
					var angle_offset = 180;
				}
				if ((delta_x >0) && (delta_y < 0)){
					var angle_offset = 270;
				}

				var displacement_scalar = Math.hypot(delta_x, delta_y);

				// Adjust displacement so it does not exceed max or min Range
				if (displacement_scalar >= this.args['radius']){
					displacement_scalar = this.args['radius'];
				};

				// Create Displacement Vector
				var degrees = (angle * (180/Math.PI)) + angle_offset;
				var rads = degrees*(Math.PI/180)

				if ((degrees > 0) && (degrees <= 90)){
					var vector_x = this.args['position'][0] + displacement_scalar*Math.cos(angle);
					var vector_y = this.args['position'][1] + displacement_scalar*Math.sin(angle);					
				}
				if ((degrees > 90) && (degrees <= 180)){
					var vector_x = this.args['position'][0] - displacement_scalar*Math.cos(angle);
					var vector_y = this.args['position'][1] + displacement_scalar*Math.sin(angle);
				}
				if ((degrees > 180) && (degrees <= 270)){
					var vector_x = this.args['position'][0] - displacement_scalar*Math.cos(angle);
					var vector_y = this.args['position'][1] - displacement_scalar*Math.sin(angle);
				}
				if ((degrees > 270) && (degrees <= 360)){
					var vector_x = this.args['position'][0] + displacement_scalar*Math.cos(angle);
					var vector_y = this.args['position'][1] - displacement_scalar*Math.sin(angle);
				}
				if (delta_x == 0){
					var vector_x = this.args['position'][0];

					if (delta_y > this.args['radius']){
						var vector_y = this.args['position'][1] - this.args['radius'];
					} else if (delta_y < (-1*this.args['radius'])){
						var vector_y = this.args['position'][1] + this.args['radius'];
					} else {
						var vector_y = delta_y;
					}
				}
				if (delta_y == 0){
					var vector_y = this.args['position'][1];

					if (delta_x > this.args['radius']){
						var vector_x = this.args['position'][0] - this.args['radius'];
					} else if (delta_x < (-1*this.args['radius'])){
						var vector_x = this.args['position'][0] + this.args['radius'];
					} else {
						var vector_x = delta_x;
					}	
				}
				stick_position = [vector_x, vector_y];

				// Determine the Motion Vector (Return Value) from our Range and Radius
				var range_scalar = this.args['range'][1] - this.args['range'][0];
				var value_conversion_factor =  range_scalar/(this.args['radius']*2);
				motion_vector = [
					value_conversion_factor* (stick_position[0] - this.args['position'][0]),
					value_conversion_factor* (stick_position[1] - this.args['position'][1])
				];

			} else {
				stick_position = [
					this.args['position'][0],
					this.args['position'][1]
				];
			}
		};

		this.render = function(screen){
			// Alignment Circle
			screen.strokeStyle = 'rgba(230,230,230,.9)';
			screen.beginPath();
			screen.arc(
				this.args['position'][0],
				this.args['position'][1], 
				5, 
				0,
				2 * Math.PI, 
				false
			);
			screen.stroke();
			screen.closePath();

			// Joystick Top
			screen.fillStyle = 'rgba(255,255,255,.6)';
			screen.beginPath();
			screen.arc(
				stick_position[0],
				stick_position[1], 
				35,
				0,
				2 * Math.PI, 
				false
			);
			screen.fill();
			screen.closePath();
		};

		this.getValue = function(){
			return (motion_vector);
		}

	}
	return (myJoystick);

}(Joystick || {});