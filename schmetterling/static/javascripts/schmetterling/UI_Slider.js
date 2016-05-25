var Slider = function(mySlider){

	mySlider.spawnRange = function(args){

		var min_value = args['min'];
		var max_value = args['max'];
		this.current_value = args['value'];
		var position = args['position'];
		var square_size = args['square_size'];
		var fg_color = args['fg_color'];
		var bg_color = args['bg_color'];

		this.update = function(screen){
			if (this.current_value > max_value){
				this.current_value = max_value;
			}
			if (this.current_value < min_value){
				this.current_value = min_value;
			};
		};

		this.getValue = function(){
			var value = this.current_value;
			if (this.current_value > max_value){
				value = max_value;
			}
			if (this.current_value < min_value){
				value = min_value;
			};
			return (value);
		};

		this.render = function(screen){
			var offset_x = 0;
			screen.fillStyle = bg_color;
			screen.strokeStyle = fg_color;
			for (var i = 0; i <= (max_value-min_value); i++){
				if (i > 0){
					screen.beginPath()
					screen.rect(position[0] + offset_x, position[1], square_size, square_size);
					screen.stroke();
					
					if (i <= this.current_value){
						screen.fill();
					};
					screen.closePath()
					offset_x += square_size*(1.5);	
				};
			};
		};
	};

	mySlider.spawnList = function(args){
		this.current_value = 0;

		var values = args['values'];
		var font = args['font'];
		var font_size = args['font_size'];
		var fg_color = args['fg_color'];
		var bg_color = args['bg_color'];
		var position = args['position'];
		var width = args['width'];

		this.update = function(screen){
			if (this.current_value > values.length-1){
				this.current_value = 0;
			}
			if (this.current_value < 0){
				this.current_value = values.length-1;
			};
		};

		this.render = function(screen){
			screen.font = font_size + "px" + " " + font;
			screen.fillStyle = bg_color;
			screen.fillRect(position[0], position[1], width, font_size+4);
			screen.fillStyle = fg_color;
			var offset_x = (width - screen.measureText(values[this.current_value]).width)/2;
			screen.fillText(values[this.current_value], position[0] + offset_x, position[1]+font_size);
		};

		this.getValue = function(){
			var value = this.current_value;
			if (this.current_value > values.length-1){
				value = 0;
			};
			if (this.current_value < 0){
				value = values.length-1;
			};
			return (values[value]);
		};

		this.setValue = function(value){
			var indexofValue = values.indexOf(value);
			if (indexofValue != -1){
				this.current_value = indexofValue;
			};
		};
	};

	return (mySlider);

}(Slider || {});