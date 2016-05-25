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

var Helpers = function(myHelpers){
	// Helper Functions
	myHelpers.getRandomInt = function(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	myHelpers.updateArgsWithKwargs = function(args, kwargs=undefined){
		var args = args
		var arg_keys = [];
		for (var arg in args){ arg_keys.push(arg) };

		if (kwargs != undefined){
			var kwarg_keys = [];
			for (var kwarg in kwargs){kwarg_keys.push(kwarg)};

			for (var i=0; i < kwarg_keys.length; i++){
				var index_in_args = arg_keys.indexOf(kwarg_keys[i]);
				if (index_in_args != -1){
					args[kwarg_keys[i]] = kwargs[kwarg_keys[i]];
				} else {
					console.log(
						'Invalid Key, For Arg List, ' + args 
						);
				}
			};
		};
		return (args)
	};

	myHelpers.renderTextRect = function(text, font, fontsize, max_width, pos, screen){
		var lines = [];
		var current_line = 0;
		var current_line_width = 0;
		var words = text.split(" ");
		screen.font = fontsize + "px " + font;
		var line = ""
		for (var i=0; i < words.length; i++){
			var word_width = screen.measureText(words[i]).width;
			if ((current_line_width+word_width) > max_width){
				lines.push(line);
				line = "";
				current_line_width = word_width;
			} else {
				current_line_width += word_width;
			}
			line += " " + words[i];
			if (i == words.length-1){
				lines.push(line);
			}
		}
		for (var i=0; i < lines.length; i++){
			screen.fillText(lines[i], pos[0], pos[1]+(i*(fontsize+2)) );
		}
	};

	myHelpers.loadImage = function(source, scene){
		var img = new Image();
		img.onload = function(){
			scene.load_progress ++;
		};
		img.onerror = function(){
			console.log('Failed to load ' + source + " for Scene " + scene);
		}
		img.src = source;

		return (img);
	};

	myHelpers.loadAudio = function(source, scene){
		var audio = new Audio();
		audio.oncanplay = function(){
			scene.load_progress ++;
		};
		audio.src = source;
		return(audio);
	};

	myHelpers.getCursorOffset = function(evt){
		canvas = document.getElementById('game_screen');
	    var rect = canvas.getBoundingClientRect();
        return [
			Math.round((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
			Math.round((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height)
		]
	}
	
	return (myHelpers);

}(Helpers || {});