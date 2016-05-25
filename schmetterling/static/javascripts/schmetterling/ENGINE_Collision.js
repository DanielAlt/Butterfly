var Collision = function(myCollision){

	myCollision.collidesWithCircle = function(radius_1, pos_1, pos_2){
		var delta_x = pos_1[0] - pos_2[0];
		var delta_y = pos_1[1] - pos_2[1];
		var hypot = Math.hypot(delta_x, delta_y);
		if ((hypot <= radius_1)){
			return true;
		} else {
			return false;
		}
	};

	return (myCollision)

}(Collision || {});