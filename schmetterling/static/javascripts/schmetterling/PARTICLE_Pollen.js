/*
      899X7                                                X8997       
     g999999Wm_                                         ,gm999999W.    
   gW99*~~~~VM9Ws                                     ,m99*~~~~VM99m.  
  g999`       "*99i                                  W9Af        Y99W. 
  999[          "*9W_                             ,g9Af           999b 
  999W            "*9W.                          g9Af            i9999 
  9999W_            "V9W.       \.    ./       g9A~            ,g99999 
  99999**Nm__          ~MW_.     N.  .N     _g9f`         ,_gm**M99999 
  9999|   89999mms___    ~MWm.    [ ]`    gm9f`   ,___mmW9999|   8999P 
  99999mmW99A***M9999999mms2M9s_,g+=Ye.,_W95_mmW9999999****999mmW9999[ 
  999999999`     "9999Af`  ~VM999P    9999*~`  ~*9999P      Y99999999[ 
  M9999AM99s.   ,g9999`       "99[    99P        Y999W_    _W99*99999! 
  ]9999b"*999999999999b       _999.  d99b.      ,999999999999Af,99999  
  "M9999i "V*9999999999Wm__gmW9999[  99999mm__gm9999999999A*~  W9999f  
   M9999s      ~~~~~~~~~~~~LmW99f   "M99ms7~~~~~~~~~~~`     ,W9999!    
     V9999Ws_        ___mmW99999[      999999mms__.       ,_m9999A`    
      "~*999999999999A**f~   ]9A[      A99   "~***999999999999Af~      
          2999A*~~`          d9 9     ][]9.          ~~V*999K.         
       ,gW9A~             ,_W9! 9[    9[ M9s_             "V99m_       
      i999A            ,_W99f` i9[    9W  ~M99s_            !999W      
      !9999ms_______mW99Af`   d99A.  /999.   ~*999ms_______mW999A      
       Y9999f~~~~~~~~~`     gW9f~ +_z`"~M9m.     ~~~~~~~~~~M9999`      
        V999            ,gm9Af`          ~*9Wm_            ]99A`       
          ~*Nm______mmW99Af                 "*999mms_____gm*f`         
             99999999                              99999999            
*/

var PurpleBlast = function(myWeapon){

	myWeapon.spawn = function(){
		this.visible = true
		this.particles = [];
		this.min_radius = 5;
		this.max_radius = 15;
		this.max_particles = 30;
		this.spawn_offset = [-50,-120];
		this.spawn_rate = 2;
		this.min_cone = -1;
		this.max_cone = 1;
		this.color ='rgba(0,255,253,.3)';
		this.parent = undefined;
		this.update = function(){

			// Creating New Particles
			if (this.visible){
				for (var i=0; i < this.spawn_rate; i++){
					particle = new Particle.spawn({
						'radius': Helpers.getRandomInt(this.min_radius, this.max_radius),
						'velocity': [this.parent.velocity[0]+4, this.parent.velocity[1]+Helpers.getRandomInt(this.min_cone,this.max_cone)],
						'position': [
							(this.parent.position[0] + this.spawn_offset[0]),
							(this.parent.position[1] + this.spawn_offset[1])
						],
						'color': this.color,
					});
					this.particles.push(particle);
				}
			}

			// Deleting Oldest Particles if particle ceiling is reached
			to_delete = this.particles.length - this.max_particles;
			for (var i=0; i < to_delete; i++){
				this.particles.splice(0,1);
			}

			// Move Particles According to Velocity
			for (var i=0; i < this.particles.length;i++){
				this.particles[i].update();
			}
		};

		this.render = function(screen){
			for (var i=0; i < this.particles.length;i++){
				screen.beginPath();
				screen.fillStyle = this.particles[i].color;
				screen.arc(
					this.particles[i].position[0], 
					this.particles[i].position[1], 
					this.particles[i].radius, 
					0,
					2 * Math.PI, 
					false
				);
				screen.fill();
				screen.closePath();
			}
		}
	};
	return (myWeapon);

}(PurpleBlast || {});