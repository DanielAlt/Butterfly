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

var ListBox = function(myListBox){

	myListBox.spawn = function(kwargs=undefined){

		var args = {
			'options': {
				'': ''
			},
			'option_keys': [],
			'current_option': 0,
			'font': 'bettyregular',
			'font_size': 18,
			'color': 'rgb(255,255,255)',
			'select_color': 'rgba(200,0,150,.7)',
			'position': [30,125],
			'width': 300,
		};

		this.args = Helpers.updateArgsWithKwargs(args, kwargs);
		for (var k in this.args['options']){this.args['option_keys'].push(k)};

		// Auto Event Bind this
		this.handle_events = function(e){
			if (e.type=='keydown'){
				switch(e.keyCode){
					case 38:
						this.args['current_option'] = this.args['current_option']-1;
						break;
					case 40:
						this.args['current_option'] = this.args['current_option']+1;
						break;
				};
			};
		};

		this.getValue = function(){
			return (this.args['option_keys'][this.args['current_option']]);
		};

		this.update = function(){
			if (this.args['current_option'] > this.args['option_keys'].length-1){
				this.args['current_option'] = 0;
			}
			if (this.args['current_option'] < 0){
				this.args['current_option'] = this.args['option_keys'].length-1;
			}
		};
			
		this.render = function(screen){
			screen.font = this.args['font_size'] + "px " + this.args['font'];
			screen.fillStyle = this.args['color'];
			
			var y_pos = 0;
			for (var i=0; i < this.args['option_keys'].length; i++){

				if (i == this.args['current_option']){
					screen.fillStyle = this.args['select_color'];
					screen.fillRect(
						this.args['position'][0]-3,
						this.args['position'][1]+y_pos-this.args['font_size']-3,
						this.args['width']+6,
						this.args['font_size']+6
					);
					screen.fillStyle = this.args['color'];
				};

				screen.fillText(
					this.args['option_keys'][i],
					this.args['position'][0],
					this.args['position'][1] + y_pos
				);
				y_pos += this.args['font_size'] + 7;
			};
		};

	};
	return (myListBox);

}(ListBox || {});