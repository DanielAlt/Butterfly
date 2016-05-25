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

var Butterfly = function(myButterfly){
	var _bf_straight = [
		'static/images/butterfly_straight/0001.png',
		'static/images/butterfly_straight/0002.png',
		'static/images/butterfly_straight/0003.png',
		'static/images/butterfly_straight/0004.png',
		'static/images/butterfly_straight/0005.png',
		'static/images/butterfly_straight/0006.png',
		'static/images/butterfly_straight/0007.png',
		'static/images/butterfly_straight/0008.png',
		'static/images/butterfly_straight/0009.png',
		'static/images/butterfly_straight/0010.png',
		'static/images/butterfly_straight/0011.png',
		'static/images/butterfly_straight/0012.png',
		'static/images/butterfly_straight/0013.png',
		'static/images/butterfly_straight/0014.png',
		'static/images/butterfly_straight/0015.png',
		'static/images/butterfly_straight/0016.png',
		'static/images/butterfly_straight/0017.png',
		'static/images/butterfly_straight/0018.png',
		'static/images/butterfly_straight/0019.png',
		'static/images/butterfly_straight/0020.png',
		'static/images/butterfly_straight/0021.png',
		'static/images/butterfly_straight/0022.png',
		'static/images/butterfly_straight/0023.png',
		'static/images/butterfly_straight/0024.png',
		'static/images/butterfly_straight/0025.png',
		'static/images/butterfly_straight/0026.png',
		'static/images/butterfly_straight/0027.png',
		'static/images/butterfly_straight/0028.png',
		'static/images/butterfly_straight/0029.png',
		'static/images/butterfly_straight/0030.png',
		'static/images/butterfly_straight/0031.png',
		'static/images/butterfly_straight/0032.png',
		'static/images/butterfly_straight/0033.png',
		'static/images/butterfly_straight/0034.png',
		'static/images/butterfly_straight/0035.png',
		'static/images/butterfly_straight/0036.png',
		'static/images/butterfly_straight/0037.png',
		'static/images/butterfly_straight/0038.png',
		'static/images/butterfly_straight/0039.png',
		'static/images/butterfly_straight/0040.png',
		'static/images/butterfly_straight/0041.png',
		'static/images/butterfly_straight/0042.png',
		'static/images/butterfly_straight/0043.png',
		'static/images/butterfly_straight/0044.png',
		'static/images/butterfly_straight/0045.png',
		'static/images/butterfly_straight/0046.png',
		'static/images/butterfly_straight/0047.png',
		'static/images/butterfly_straight/0048.png',
		'static/images/butterfly_straight/0049.png',
		'static/images/butterfly_straight/0050.png',
		'static/images/butterfly_straight/0051.png',
		'static/images/butterfly_straight/0052.png',
		'static/images/butterfly_straight/0053.png',
		'static/images/butterfly_straight/0054.png',
		'static/images/butterfly_straight/0055.png',
		'static/images/butterfly_straight/0056.png',
		'static/images/butterfly_straight/0057.png',
		'static/images/butterfly_straight/0058.png',
		'static/images/butterfly_straight/0059.png',
		'static/images/butterfly_straight/0060.png',
		'static/images/butterfly_straight/0061.png',
		'static/images/butterfly_straight/0062.png',
		'static/images/butterfly_straight/0063.png',
		'static/images/butterfly_straight/0064.png',
		'static/images/butterfly_straight/0065.png',
		'static/images/butterfly_straight/0066.png',
		'static/images/butterfly_straight/0067.png',
		'static/images/butterfly_straight/0068.png',
		'static/images/butterfly_straight/0069.png',
		'static/images/butterfly_straight/0070.png',
		'static/images/butterfly_straight/0071.png',
		'static/images/butterfly_straight/0072.png',
		'static/images/butterfly_straight/0073.png',
		'static/images/butterfly_straight/0074.png',
		'static/images/butterfly_straight/0075.png',
		'static/images/butterfly_straight/0076.png',
		'static/images/butterfly_straight/0077.png',
		'static/images/butterfly_straight/0078.png',
		'static/images/butterfly_straight/0079.png',
		'static/images/butterfly_straight/0080.png'
	];
	var _bf_down = [
		'static/images/butterfly_down/0001.png',
		'static/images/butterfly_down/0002.png',
		'static/images/butterfly_down/0003.png',
		'static/images/butterfly_down/0004.png',
		'static/images/butterfly_down/0005.png',
		'static/images/butterfly_down/0006.png',
		'static/images/butterfly_down/0007.png',
		'static/images/butterfly_down/0008.png',
		'static/images/butterfly_down/0009.png',
		'static/images/butterfly_down/0010.png',
		'static/images/butterfly_down/0011.png',
		'static/images/butterfly_down/0012.png',
		'static/images/butterfly_down/0013.png',
		'static/images/butterfly_down/0014.png',
		'static/images/butterfly_down/0015.png',
		'static/images/butterfly_down/0016.png',
		'static/images/butterfly_down/0017.png',
		'static/images/butterfly_down/0018.png',
		'static/images/butterfly_down/0019.png',
		'static/images/butterfly_down/0020.png',
		'static/images/butterfly_down/0021.png',
		'static/images/butterfly_down/0022.png',
		'static/images/butterfly_down/0023.png',
		'static/images/butterfly_down/0024.png',
		'static/images/butterfly_down/0025.png',
		'static/images/butterfly_down/0026.png',
		'static/images/butterfly_down/0027.png',
		'static/images/butterfly_down/0028.png',
		'static/images/butterfly_down/0029.png',
		'static/images/butterfly_down/0030.png',
		'static/images/butterfly_down/0031.png',
		'static/images/butterfly_down/0032.png',
		'static/images/butterfly_down/0033.png',
		'static/images/butterfly_down/0034.png',
		'static/images/butterfly_down/0035.png',
		'static/images/butterfly_down/0036.png',
		'static/images/butterfly_down/0037.png',
		'static/images/butterfly_down/0038.png',
		'static/images/butterfly_down/0039.png',
		'static/images/butterfly_down/0040.png',
		'static/images/butterfly_down/0041.png',
		'static/images/butterfly_down/0042.png',
		'static/images/butterfly_down/0043.png',
		'static/images/butterfly_down/0044.png',
		'static/images/butterfly_down/0045.png',
		'static/images/butterfly_down/0046.png',
		'static/images/butterfly_down/0047.png',
		'static/images/butterfly_down/0048.png',
		'static/images/butterfly_down/0049.png',
		'static/images/butterfly_down/0050.png',
		'static/images/butterfly_down/0051.png',
		'static/images/butterfly_down/0052.png',
		'static/images/butterfly_down/0053.png',
		'static/images/butterfly_down/0054.png',
		'static/images/butterfly_down/0055.png',
		'static/images/butterfly_down/0056.png',
		'static/images/butterfly_down/0057.png',
		'static/images/butterfly_down/0058.png',
		'static/images/butterfly_down/0059.png',
		'static/images/butterfly_down/0060.png',
		'static/images/butterfly_down/0061.png',
		'static/images/butterfly_down/0062.png',
		'static/images/butterfly_down/0063.png',
		'static/images/butterfly_down/0064.png',
		'static/images/butterfly_down/0065.png',
		'static/images/butterfly_down/0066.png',
		'static/images/butterfly_down/0067.png',
		'static/images/butterfly_down/0068.png',
		'static/images/butterfly_down/0069.png',
		'static/images/butterfly_down/0070.png',
		'static/images/butterfly_down/0071.png',
		'static/images/butterfly_down/0072.png',
		'static/images/butterfly_down/0073.png',
		'static/images/butterfly_down/0074.png',
		'static/images/butterfly_down/0075.png',
		'static/images/butterfly_down/0076.png',
		'static/images/butterfly_down/0078.png',
		'static/images/butterfly_down/0079.png',
		'static/images/butterfly_down/0080.png'	
	];
	var _bf_up = [
		'static/images/butterfly_up/0001.png',
		'static/images/butterfly_up/0002.png',
		'static/images/butterfly_up/0003.png',
		'static/images/butterfly_up/0004.png',
		'static/images/butterfly_up/0005.png',
		'static/images/butterfly_up/0006.png',
		'static/images/butterfly_up/0007.png',
		'static/images/butterfly_up/0008.png',
		'static/images/butterfly_up/0010.png',
		'static/images/butterfly_up/0011.png',
		'static/images/butterfly_up/0012.png',
		'static/images/butterfly_up/0013.png',
		'static/images/butterfly_up/0014.png',
		'static/images/butterfly_up/0015.png',
		'static/images/butterfly_up/0016.png',
		'static/images/butterfly_up/0017.png',
		'static/images/butterfly_up/0018.png',
		'static/images/butterfly_up/0019.png',
		'static/images/butterfly_up/0020.png',
		'static/images/butterfly_up/0021.png',
		'static/images/butterfly_up/0022.png',
		'static/images/butterfly_up/0023.png',
		'static/images/butterfly_up/0024.png',
		'static/images/butterfly_up/0025.png',
		'static/images/butterfly_up/0026.png',
		'static/images/butterfly_up/0027.png',
		'static/images/butterfly_up/0028.png',
		'static/images/butterfly_up/0029.png',
		'static/images/butterfly_up/0030.png',
		'static/images/butterfly_up/0031.png',
		'static/images/butterfly_up/0032.png',
		'static/images/butterfly_up/0033.png',
		'static/images/butterfly_up/0034.png',
		'static/images/butterfly_up/0035.png',
		'static/images/butterfly_up/0036.png',
		'static/images/butterfly_up/0037.png',
		'static/images/butterfly_up/0038.png',
		'static/images/butterfly_up/0039.png',
		'static/images/butterfly_up/0040.png',
		'static/images/butterfly_up/0041.png',
		'static/images/butterfly_up/0042.png',
		'static/images/butterfly_up/0043.png',
		'static/images/butterfly_up/0044.png',
		'static/images/butterfly_up/0045.png',
		'static/images/butterfly_up/0046.png',
		'static/images/butterfly_up/0047.png',
		'static/images/butterfly_up/0048.png',
		'static/images/butterfly_up/0049.png',
		'static/images/butterfly_up/0050.png',
		'static/images/butterfly_up/0051.png',
		'static/images/butterfly_up/0052.png',
		'static/images/butterfly_up/0053.png',
		'static/images/butterfly_up/0054.png',
		'static/images/butterfly_up/0055.png',
		'static/images/butterfly_up/0056.png',
		'static/images/butterfly_up/0057.png',
		'static/images/butterfly_up/0058.png',
		'static/images/butterfly_up/0059.png',
		'static/images/butterfly_up/0060.png',
		'static/images/butterfly_up/0061.png',
		'static/images/butterfly_up/0062.png',
		'static/images/butterfly_up/0063.png',
		'static/images/butterfly_up/0064.png',
		'static/images/butterfly_up/0065.png',
		'static/images/butterfly_up/0066.png',
		'static/images/butterfly_up/0067.png',
		'static/images/butterfly_up/0069.png',
		'static/images/butterfly_up/0070.png',
		'static/images/butterfly_up/0071.png',
		'static/images/butterfly_up/0072.png',
		'static/images/butterfly_up/0073.png',
		'static/images/butterfly_up/0074.png',
		'static/images/butterfly_up/0075.png',
		'static/images/butterfly_up/0076.png',
		'static/images/butterfly_up/0077.png',
		'static/images/butterfly_up/0078.png',
		'static/images/butterfly_up/0079.png',
		'static/images/butterfly_up/0080.png',
	];
	var _bf_left = [
		'static/images/butterfly_left/0001.png',
		'static/images/butterfly_left/0002.png',
		'static/images/butterfly_left/0003.png',
		'static/images/butterfly_left/0004.png',
		'static/images/butterfly_left/0005.png',
		'static/images/butterfly_left/0006.png',
		'static/images/butterfly_left/0007.png',
		'static/images/butterfly_left/0008.png',
		'static/images/butterfly_left/0009.png',
		'static/images/butterfly_left/0010.png',
		'static/images/butterfly_left/0011.png',
		'static/images/butterfly_left/0012.png',
		'static/images/butterfly_left/0013.png',
		'static/images/butterfly_left/0014.png',
		'static/images/butterfly_left/0015.png',
		'static/images/butterfly_left/0016.png',
		'static/images/butterfly_left/0017.png',
		'static/images/butterfly_left/0018.png',
		'static/images/butterfly_left/0019.png',
		'static/images/butterfly_left/0020.png',
		'static/images/butterfly_left/0021.png',
		'static/images/butterfly_left/0022.png',
		'static/images/butterfly_left/0023.png',
		'static/images/butterfly_left/0024.png',
		'static/images/butterfly_left/0025.png',
		'static/images/butterfly_left/0026.png',
		'static/images/butterfly_left/0027.png',
		'static/images/butterfly_left/0028.png',
		'static/images/butterfly_left/0029.png',
		'static/images/butterfly_left/0030.png',
		'static/images/butterfly_left/0031.png',
		'static/images/butterfly_left/0032.png',
		'static/images/butterfly_left/0033.png',
		'static/images/butterfly_left/0034.png',
		'static/images/butterfly_left/0035.png',
		'static/images/butterfly_left/0036.png',
		'static/images/butterfly_left/0037.png',
		'static/images/butterfly_left/0038.png',
		'static/images/butterfly_left/0039.png',
		'static/images/butterfly_left/0040.png',
		'static/images/butterfly_left/0041.png',
		'static/images/butterfly_left/0042.png',
		'static/images/butterfly_left/0043.png',
		'static/images/butterfly_left/0044.png',
		'static/images/butterfly_left/0045.png',
		'static/images/butterfly_left/0046.png',
		'static/images/butterfly_left/0047.png',
		'static/images/butterfly_left/0048.png',
		'static/images/butterfly_left/0049.png',
		'static/images/butterfly_left/0050.png',
		'static/images/butterfly_left/0051.png',
		'static/images/butterfly_left/0052.png',
		'static/images/butterfly_left/0053.png',
		'static/images/butterfly_left/0054.png',
		'static/images/butterfly_left/0055.png',
		'static/images/butterfly_left/0056.png',
		'static/images/butterfly_left/0057.png',
		'static/images/butterfly_left/0058.png',
		'static/images/butterfly_left/0059.png',
		'static/images/butterfly_left/0060.png',
		'static/images/butterfly_left/0061.png',
		'static/images/butterfly_left/0062.png',
		'static/images/butterfly_left/0063.png',
		'static/images/butterfly_left/0064.png',
		'static/images/butterfly_left/0065.png',
		'static/images/butterfly_left/0066.png',
		'static/images/butterfly_left/0067.png',
		'static/images/butterfly_left/0069.png',
		'static/images/butterfly_left/0070.png',
		'static/images/butterfly_left/0071.png',
		'static/images/butterfly_left/0072.png',
		'static/images/butterfly_left/0073.png',
		'static/images/butterfly_left/0074.png',
		'static/images/butterfly_left/0075.png',
		'static/images/butterfly_left/0076.png',
		'static/images/butterfly_left/0077.png',
		'static/images/butterfly_left/0078.png',
		'static/images/butterfly_left/0079.png',
		'static/images/butterfly_left/0080.png'
	];
	
	myButterfly.spawn = function(){
		// Animation Frames
		this.frames = {
			'fly_straight': [],
			'fly_up': [],
			'fly_down': [],
			'fly_left': []
		};
		this.current_frame_number = 0; 
		this.state = "fly_straight";

		// Positional Variables
		this.offset = [-200,-150];
		this.position = [300,300];
		this.velocity = [0,0];

		// Loading
		this.loaded = false;
		this.load_progress = 0;
		this.load_total = 0

		this.init = function(){
			for (var i=0; i < _bf_left.length; i++){
				this.frames['fly_left'].push(Helpers.loadImage(_bf_left[i], this));
			};
			for (var i=0; i < _bf_up.length; i++){
				this.frames['fly_up'].push(Helpers.loadImage(_bf_up[i], this));
			};
			for (var i=0; i < _bf_down.length; i++){
				this.frames['fly_down'].push(Helpers.loadImage(_bf_down[i], this));
			};
			for (var i=0; i < _bf_straight.length; i++){
				this.frames['fly_straight'].push(Helpers.loadImage(_bf_straight[i], this));
			}

			// Determine if Butterfly is Loaded
			var keys = [];
			for (var k in this.frames){keys.push(k)};
			for (var i = 0; i < keys.length; i++){
				this.load_total += this.frames[keys[i]].length;
			}
		};

		this.update = function(delta){
			this.position = [
				this.position[0] + this.velocity[0],
				this.position[1] + this.velocity[1]
			];
			// Update Sprite State
			if (this.velocity[1] < 0){
				this.state = 'fly_up';
			}
			if (this.velocity[1]== 0){
				this.state = 'fly_straight';
			}
			if (this.velocity[1] > 0){
				this.state = 'fly_down';
			}
			if (this.velocity[0] < 0){
				this.state = 'fly_left';
			}
			// Update Frame Number
			this.current_frame_number ++;
			if (this.current_frame_number >= this.frames[this.state].length-1){
				this.current_frame_number = 0;
			}
		};
		this.render = function(screen){
		    
			if (this.load_progress == this.load_total){
				this.loaded = true;
		    };

		    if (this.loaded){
		        screen.drawImage(
		        	this.frames[this.state][this.current_frame_number], 
		        	this.position[0] + this.offset[0], 
		        	this.position[1] + this.offset[1]
		        );
		    };
		};
	};

	return (myButterfly);

}(Butterfly || {});