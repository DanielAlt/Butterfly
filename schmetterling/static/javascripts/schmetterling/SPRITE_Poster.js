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

var Poster = function(myPoster){
	var _p_frames = [
		'static/images/butterfly_menu/0001.png',
		'static/images/butterfly_menu/0002.png',
		'static/images/butterfly_menu/0003.png',
		'static/images/butterfly_menu/0004.png',
		'static/images/butterfly_menu/0005.png',
		'static/images/butterfly_menu/0006.png',
		'static/images/butterfly_menu/0007.png',
		'static/images/butterfly_menu/0008.png',
		'static/images/butterfly_menu/0009.png',
		'static/images/butterfly_menu/0010.png',
		'static/images/butterfly_menu/0011.png',
		'static/images/butterfly_menu/0012.png',
		'static/images/butterfly_menu/0013.png',
		'static/images/butterfly_menu/0014.png',
		'static/images/butterfly_menu/0015.png',
		'static/images/butterfly_menu/0016.png',
		'static/images/butterfly_menu/0017.png',
		'static/images/butterfly_menu/0018.png',
		'static/images/butterfly_menu/0019.png',
		'static/images/butterfly_menu/0020.png',
		'static/images/butterfly_menu/0021.png',
		'static/images/butterfly_menu/0022.png',
		'static/images/butterfly_menu/0023.png',
		'static/images/butterfly_menu/0024.png',
		'static/images/butterfly_menu/0025.png',
		'static/images/butterfly_menu/0026.png',
		'static/images/butterfly_menu/0027.png',
		'static/images/butterfly_menu/0028.png',
		'static/images/butterfly_menu/0029.png',
		'static/images/butterfly_menu/0030.png',
		'static/images/butterfly_menu/0031.png',
		'static/images/butterfly_menu/0032.png',
		'static/images/butterfly_menu/0033.png',
		'static/images/butterfly_menu/0034.png',
		'static/images/butterfly_menu/0035.png',
		'static/images/butterfly_menu/0036.png',
		'static/images/butterfly_menu/0037.png',
		'static/images/butterfly_menu/0038.png',
		'static/images/butterfly_menu/0039.png',
		'static/images/butterfly_menu/0040.png',
		'static/images/butterfly_menu/0041.png',
		'static/images/butterfly_menu/0042.png',
		'static/images/butterfly_menu/0043.png',
		'static/images/butterfly_menu/0044.png',
		'static/images/butterfly_menu/0045.png',
		'static/images/butterfly_menu/0046.png',
		'static/images/butterfly_menu/0047.png',
		'static/images/butterfly_menu/0048.png',
		'static/images/butterfly_menu/0049.png',
		'static/images/butterfly_menu/0050.png',
		'static/images/butterfly_menu/0051.png',
		'static/images/butterfly_menu/0052.png',
		'static/images/butterfly_menu/0053.png',
		'static/images/butterfly_menu/0054.png',
		'static/images/butterfly_menu/0055.png',
		'static/images/butterfly_menu/0056.png',
		'static/images/butterfly_menu/0057.png',
		'static/images/butterfly_menu/0058.png',
		'static/images/butterfly_menu/0059.png',
		'static/images/butterfly_menu/0060.png',
		'static/images/butterfly_menu/0061.png',
		'static/images/butterfly_menu/0062.png',
		'static/images/butterfly_menu/0063.png',
		'static/images/butterfly_menu/0064.png',
		'static/images/butterfly_menu/0065.png',
		'static/images/butterfly_menu/0066.png',
		'static/images/butterfly_menu/0067.png',
		'static/images/butterfly_menu/0068.png',
		'static/images/butterfly_menu/0069.png',
		'static/images/butterfly_menu/0070.png',
		'static/images/butterfly_menu/0071.png',
		'static/images/butterfly_menu/0072.png',
		'static/images/butterfly_menu/0073.png',
		'static/images/butterfly_menu/0074.png',
		'static/images/butterfly_menu/0075.png',
		'static/images/butterfly_menu/0076.png',
		'static/images/butterfly_menu/0077.png',
		'static/images/butterfly_menu/0078.png',
		'static/images/butterfly_menu/0079.png',
		'static/images/butterfly_menu/0080.png'
	];
	myPoster.spawn = function(){
		var frames = [];
		var current_frame = 0;
		var position = [200,200];

		this.loaded = false;
		this.load_progress = 0;
		// Load Images
		for (var i = 0; i < _p_frames.length; i++){
			var img = Helpers.loadImage(_p_frames[i], this);
			frames.push(img);
		};
		this.load_max = frames.length-1;

		this.update = function(){
			current_frame ++;
			if (current_frame > frames.length-1){
				current_frame = 0;
			};
			if (this.load_progress > this.load_max){
				this.loaded = true;
			}
		};

		this.render = function(screen){
			screen.drawImage(frames[current_frame], position[0], position[1]);
		};

	};
	return (myPoster);

}(Poster || {})