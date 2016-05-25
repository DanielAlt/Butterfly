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

var PauseMenu = function(myMenu){

	myMenu.spawn = function(globalPersistence){
		// LOGIC
		var globalPersistence = globalPersistence;
	
		var menu_state = 'PAUSE';
		var active_item = undefined;

		var loaded = false;
		var load_progress = 0;
		var load_total = 0;
		// LOGIC

		// PAUSE MENU		
		var current_stats = {
			'total_time': 0,
			'total_distance': 0,
			'pollen_collected': 0 
		};

		this._pause_hints = [
			"Don't forget to use your Purple Blast, it's a good default weapon against low level enemies.",
			"Did you know, if you collect 100 Pollen, you gain a life?",
			"Power Ups will give you crazy abilities for Short amount of time",
			"Did you know Schmetterling was the German noun for Butterfly?",
			"The guy who programmed this is really happy you're playing... you should give him some money, probably",
			"You can use the pause menu to teleport your butterfly. You have 0 reasons not to destroy the leaderboard"
		];
		this._current_hint = 0;
		var pause_options = new ListBox.spawn({
			'options': {
				'Resume' : function(){
					window.dispatchEvent(GameEvents.PauseEvent);
				},
				'Save Game': function(){},
				'Load Game': function(){},
				'Options': function(){
					menu_state = 'OPTIONS'
				},
				'Quit' : function(){
					window.dispatchEvent(GameEvents.QuitEvent);
				},
			},
			'font': 'bettyregular',
			'font_size': 24,
			'color': 'rgb(255,255,255)',
			'select_color': 'rgba(200,0,150,.7)' ,
			'position': [30,125],
			'width': 350
		});
		// PAUSE MENU		

		// OPTIONS MENU
		var options_menu = new ListBox.spawn({
			'options': {
				'Audio': function(){
					menu_state = 'AUDIO';
				},
				'Display': function(){
					menu_state = 'DISPLAY';
				},
				'Controls': function(){
					menu_state = 'CONTROLS';
				},
				'Return': function(){
					menu_state = "PAUSE";
				}
			},
			'font': 'bettyregular',
			'font_size': 24,
			'color': 'rgb(255,255,255)',
			'select_color': 'rgba(200,0,150,.7)',
			'position': [30,125],
			'width': 300
		});
		// OPTIONS MENU

		// AUDIO MENU
		var audio_menu = new ListBox.spawn({
			'options': {
				'Music Volume': function(){},
				'SFX Volume': function(){},
				'Mute': function(){},
				'Return': function(){
					menu_state = "OPTIONS";
				}
			},
			'font': 'bettyregular',
			'font_size': 24,
			'color': 'rgb(255,255,255)',
			'select_color': 'rgba(200,0,150,.7)',
			'position': [30,125],
			'width': 300
		});

	    var music_volume_slider = new Slider.spawnRange({
	      'min': 0,
	      'max': 10,
	      'value': 10,
	      'position': [345,100],
	      'square_size': 20,
	      'fg_color': 'rgba(0,0,0,.8)',
	      'bg_color': 'rgba(200,0,150,.7)'
	    });
	    music_volume_slider.current_value = globalPersistence.args['music_volume'];

	    var sfx_volume_slider = new Slider.spawnRange({
	      'min': 0,
	      'max': 10,
	      'value': 10,
	      'position': [345,130],
	      'square_size': 20,
	      'fg_color': 'rgba(0,0,0,.8)',
	      'bg_color': 'rgba(200,0,150,.7)'
	    });
	    sfx_volume_slider.current_value = globalPersistence.args['sfx_volume'];

	    var mute_toggle = new Slider.spawnList({
	      'values': ["Off", "On"],
	      'font': 'bettyregular',
	      'font_size': 32,
	      'fg_color': 'rgb(0,0,0)',
	      'bg_color': 'rgba(250,0,150,.7)',
	      'position': [345, 160],
	      'width': 300
	    });
        if (globalPersistence.args['mute']){
	      mute_toggle.setValue('On');    
	    } else {
	      mute_toggle.setValue('Off');  
	    };
		// AUDIO MENU

		// DISPLAY MENU
		var display_menu = new ListBox.spawn({
			'options': {
				'Fullscreen': function(){},
				'Resolution': function(){},
				'Return': function(){
					menu_state = "OPTIONS";
				}
			},
			'font': 'bettyregular',
			'font_size': 24,
			'color': 'rgb(255,255,255)',
			'select_color': 'rgba(200,0,150,.7)',
			'position': [30,125],
			'width': 300
		});

	    var displaymode_slider = new Slider.spawnList({
	      'values': ['Windowed', 'FullScreen'],
	      'font': 'bettyregular',
	      'font_size': 32,
	      'fg_color': 'rgb(0,0,0)',
	      'bg_color': 'rgba(250,0,150,.7)',
	      'position': [345, 190],
	      'width': 300
	    });
	    displaymode_slider.setValue(globalPersistence.args['display_mode']);

		var menu_sfx = new Sound.spawnSFX(
			'static/audio/MainMenu/ping.mp3',
			globalPersistence.args['sfx_volume'],
			globalPersistence.args['muted']
		);
		// DISPLAY MENU


		// MENU ACTIONS
		var menuUp = function(){
			switch (menu_state){
				case 'PAUSE':
					pause_options.args['current_option'] = pause_options.args['current_option']-1;
					break;
				case 'OPTIONS':
					options_menu.args['current_option'] = options_menu.args['current_option']-1;
					break;
				case 'AUDIO':
					audio_menu.args['current_option'] = audio_menu.args['current_option']-1;
					break;
				case 'DISPLAY':
					display_menu.args['current_option'] = display_menu.args['current_option']-1;
					break;
				case 'CONTROLS':
					break;
			};
		};

		var menuDown = function(){
			switch (menu_state){
				case 'PAUSE':
					pause_options.args['current_option'] = pause_options.args['current_option']+1;
					break;
				case 'OPTIONS':
					options_menu.args['current_option'] = options_menu.args['current_option']+1;
					break;
				case 'AUDIO':
					audio_menu.args['current_option'] = audio_menu.args['current_option']+1;
					break;
				case 'DISPLAY':
					display_menu.args['current_option'] = display_menu.args['current_option']+1;
					break;
				case 'CONTROLS':
					break;
			};
		};

		var menuLeft = function(){}

		var menuRight = function(){}

		var menuSelect = function(){
			switch (menu_state){
				case 'PAUSE':
					var p_opt = pause_options.getValue();
					pause_options.args['options'][p_opt];
					break;
				case 'OPTIONS':
					break;
				case 'AUDIO':
					break;
				case 'DISPLAY':
					break;
				case 'CONTROLS':
					break;
			};	
		}
		// MENU ACTIONS 

		this.handle_events = function(){
			if (globalPersistence.args['controller']=='touch'){
				// HANDLE TOUCH EVENTS

				// HANDLE TOUCH EVENTS
			} else if (globalPersistence.args['controller']=='gamepad'){
				// HANDLE GAMEPAD EVENTS

				// HANDLE GAMEPAD EVENTS
			} else if (globalPersistence.args['controller']=='mouse'){	
				// HANDLE KEYBOARD EVENTS
				window.addEventListener('keydown', function(e){
					switch (e.keyCode){
						case 65: // A
							break;
						case 87: // W
							menuUp();
							break;
						case 68: // D
							break;
						case 83: // S
							menuDown();
							break;
						case 37: // Left
							break;
						case 38: // Up
							menuUp();
							break;
						case 39: // Right 
							break;
						case 40: // DOWN
							menuDown();
							break;
						case 13: // ENTER
							menuSelect();
							break;
					}
				});
				// HANDLE KEYBOARD EVENTS
			};			
		};

		this.update = function(stats){

			if (!menu_sfx.loaded){
				menu_sfx.update();
			}
			current_stats = stats;

			// UPDATE MENU WIDGETS
			switch (menu_state){
				case 'PAUSE':
					pause_options.update();
					break;
				case 'OPTIONS':
					options_menu.update();
					active_option = options_menu.getValue();
					// Widgets
					music_volume_slider.update();
					sfx_volume_slider.update();
					mute_toggle.update();
					displaymode_slider.update();
					break;
				case 'AUDIO':
					audio_menu.update();
					break;
				case 'DISPLAY':
					display_menu.update();
					break;
				case 'CONTROLS':
					break;
			};
			// UPDATE MENU WIDGETS
		};

		this.render = function(screen){
			screen.fillStyle = 'rgba(0,0,0,.8)';
			screen.fillRect(0, 0, globalPersistence.args['screen_size'][0], globalPersistence.args['screen_size'][1]);

			screen.fillStyle = 'rgb(255,255,255)';
			screen.font = '18px bettyregular';
			screen.fillText("Press, 'p,' to Resume Game", 30, 95);

			screen.font = '26px bettyregular';
			screen.fillText("Hint: ", 25, 390);

			Helpers.renderTextRect(
				this._pause_hints[ this._current_hint ], 
				'bettyregular', 
				26,
				350,
				[5,425],
				screen
			);
			
			switch (menu_state){
				case 'PAUSE':
					screen.font = '40px bettyregular';
					screen.fillText("Paused", 30, 70);

					screen.font = '24px bettyregular';
					screen.fillText('Player Stats', 400, 100);
					screen.font = '18px bettyregular'
					screen.fillText("Total Time: " + Math.floor((globalPersistence.args['total_time'] + current_stats['total_time'])/1000) ,400 ,125);
					screen.fillText("Total Distance: " + Math.floor(-1*(globalPersistence.args['total_distance'] + current_stats['total_distance'])/1000),400 , 150);
					screen.fillText("Pollen Collected: " + (globalPersistence.args['pollen_collected'] + current_stats['pollen_collected']), 400, 175);
					pause_options.render(screen);
					break;
				case 'OPTIONS':
					screen.font = '40px bettyregular';
					screen.fillText("Game Options", 30, 70);
					options_menu.render(screen);
					break;
				case 'AUDIO':
					if (active_item == 'Music Volume'){
						music_volume_slider.render(screen);
				
					} else if (active_item == 'SFX Volume'){
						sfx_volume_slider.render(screen);
				
					} else if (active_item == 'Mute'){
						mute_toggle.render(screen);
					}
					break;
				case 'DISPLAY':
					if (active_item == 'Fullscreen'){
						displaymode_slider.render(screen);
					}
					break;
			};
		};
	}

	return (myMenu);

}(PauseMenu || {});