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

var GameScene = function(myGame){

	var spawnTouchControls = function(screen_size){
		var left_controller = new Joystick.spawn({
			'range': [-255,255],
			'position': [175, screen_size[1]-175],
			'radius': 100
		});
		var right_controller = new RightButtons.spawn({
			'buttons': [
				new RightButtons.button('A', [ screen_size[0]-280,screen_size[1]-100], 50),
				new RightButtons.button('B', [ screen_size[0]-100,screen_size[1]-140], 50)
			]
		});
		return ([left_controller, right_controller]);
	}

	myGame.spawn = function(globalPersistence){
		// Player Stats (Hero Stats)
		var total_time = 0;
		var pollen_collected = 0;
		var total_distance = 0;
		// Player Stats (Hero Stats)

		// HUD
		var health_bar = new ProgressBar.spawn({
			'min': 0,
			'max': 100,
			'color': 'rgba(250,0,0,.9)',
			'position': [
				15,
				50
			],
			'width': 300,
			'height': 20,
			'border':  'rgba(250,0,0,.9)'
		});
		health_bar.current_value = 80;

		var pollen_bar = new ProgressBar.spawn({
			'min': 0,
			'max': 100,
			'color': 'rgba(250,250,75,.9)',
			'position': [
				15,
				75
			],
			'width': 300,
			'height': 20,
			'border': 'rgba(250,250,75,.9)'
		});
		pollen_bar.current_value = 50;

		var evt_text = new EventText.spawn("Schmetterling");
		// Controller 
		// var controllers = spawnTouchControls(
		// 	globalPersistence.args['screen_size']
		// );
		var left_controller = new Joystick.spawn({
			'range': [-255,255],
			'position': [175, globalPersistence.args['screen_size'][1]-175],
			'radius': 100
		});
		var right_controller = new RightButtons.spawn({
			'buttons': [
				new RightButtons.button('A', [ globalPersistence.args['screen_size'][0]-280,globalPersistence.args['screen_size'][1]-100], 50),
				new RightButtons.button('B', [ globalPersistence.args['screen_size'][0]-100,globalPersistence.args['screen_size'][1]-140], 50)
			]
		});
		// Audio
		var ambient_music = new Sound.spawnAmbient(
			'static/audio/level_1/Ossuary_5.mp3',
			globalPersistence.args['music_volume'],
			globalPersistence.args['muted']
		);

		// Pause Menu
		var paused = false;
		var pause_menu = new PauseMenu.spawn(globalPersistence);

		// SPRITES AND IMAGES
		var butterfly = new Butterfly.spawn();
		butterfly.init();

		var sky = new SkyBox.spawn({
			'velocity': [0,0],
			'position': [0,-1000],
			'path': 'static/images/level_1/sky.png'
		});

		var static_objects = [
			new SkyBox.spawn({
				'path': 'static/images/level_1/grass_large.png',
				'position': [-200, globalPersistence.args['screen_size'][1]-762],
				'velocity': [0, 0]
			}),
			
			new SkyBox.spawn({
				'path': 'static/images/level_1/trees/tree_3.png',
				'position': [-550, -600],
				'velocity': [0,0]
			}),
			
			new SkyBox.spawn({
				'path': 'static/images/level_1/flowers/flower_1.png',
				'position': [
					globalPersistence.args['screen_size'][0]-300,
					globalPersistence.args['screen_size'][1]-430
				],
				'velocity': [0,0]
			}),
			
			new SkyBox.spawn({
				'path': 'static/images/level_1/flowers/flower_2.png',
				'position': [
					globalPersistence.args['screen_size'][0]-500,
					globalPersistence.args['screen_size'][1]-432
				],
				'velocity': [0,0]
			}),

			new SkyBox.spawn({
				'path': 'static/images/level_1/flowers/bell_flower.png',
				'position': [
					globalPersistence.args['screen_size'][0]-700,
					globalPersistence.args['screen_size'][1]-194
				],
				'velocity': [0,0]
			})

		];
		
		// PARTICLES
		var weapon = new PurpleBlast.spawn();
		weapon.parent = butterfly;

		var loaded = false;
		var load_progress = 0;
		var load_total = (sky.load_total + butterfly.load_total);
		for (var i=0;i < static_objects.length; i++){
			load_total += static_objects[i].load_total;
		};
		var loading_bar = new ProgressBar.spawn({
			'min': 0,
			'max': load_total,
			'color': 'rgb(255,0,0)',
			'position': [
				globalPersistence.args['screen_size'][0]/4,
				globalPersistence.args['screen_size'][1]/4+150
			],
			'width': 400,
			'border': 'rgb(255,255,255)'
		});

		// GAME LOGIC
		var camera_slack = [
			globalPersistence.args['screen_size'][0]/6,
			globalPersistence.args['screen_size'][1]/4
		]
		var world_offset = [0,0];

		this.init = function(){
			$(window).unbind();

			// CONTROLS IF TOUCH DEVICE
			if (globalPersistence.args['controller'] == 'touch'){
				
				window.addEventListener('touchstart', function(event) { 
					right_controller.handle_events(event);
					left_controller.handle_events(event);
				});

				window.addEventListener('touchmove', function(event){
					left_controller.handle_events(event);
				});

				window.addEventListener('touchend', function(event){
					right_controller.handle_events(event);
					left_controller.handle_events(event);
					butterfly.velocity = [0,0];
				});

			// CONTROLS IF GAMEPAD
			} else if (globalPersistence.args['controller']=='gamepad'){

				window.addEventListener("gamepadconnected", function(e) {
					var gp = navigator.getGamepads()[e.gamepad.index];
					console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
					    gp.index,
					    gp.id,
					    gp.buttons.length, 
					    gp.axes.length
					);
				});

				window.addEventListener('gamepaddisconnected', function(e){
					window.dispatchEvent(GameEvents.PauseEvent);
					alert('You disconnected the controller, Fuck YOU!');
				});

			// CONTROLS IF KEYBOARD AND MOUSE (For Computers and Mouse)
			} else if (globalPersistence.args['controller']=='mouse'){
				
				window.addEventListener('keydown', function(event){
					switch (event.keyCode){
						case 32: // Space
							weapon.visible = true;
							break;
						case 65: //W
							butterfly.velocity[0] = -255/30;
							break;
						case 87: //A
							butterfly.velocity[1] = -255/30;
							break;
						case 83: //S
							butterfly.velocity[1] = 255/30;
							break;
						case 68: //D
							butterfly.velocity[0] = 255/30;
							break;
					}
				});
				
				window.addEventListener('keyup', function(event){
					switch (event.keyCode){
						case 32: //Space
							weapon.visible = false;
							break;
						case 65:
							butterfly.velocity[0] = 0;
							break;
						case 87: //A
							butterfly.velocity[1] = 0;
							break;
						case 83: //S
							butterfly.velocity[1] = 0;
							break;
						case 68:
							butterfly.velocity[0] = 0;
							break;
					}
				});

			}

			// CUSTOM GAME EVENTS 
			window.addEventListener('eventMVolume', function(event){
                ambient_music.setVolume(globalPersistence.args['music_volume']);
			});
			
			window.addEventListener('eventSFXVolume', function(event){
				// menu_sfx.setVolume(globalPersistence.args['']);
			});
			
			window.addEventListener('eventMute', function(event){
              ambient_music.muteToggle(globalPersistence('mute'));
              menu_sfx.muteToggle(globalPersistence('mute'));
			});
			
			window.addEventListener('eventPause', function(event){
				if (paused){
					paused = false;
					ambient_music.audio.play();
					switch (globalPersistence.args['controller']){
						case 'mouse':
							window.removeEventListener('keydown');
							break;	
					}
				} else {
					paused = true;
					ambient_music.audio.pause();
					pause_menu.handle_events();
					pause_menu._current_hint = Helpers.getRandomInt(0, pause_menu._pause_hints.length);
				};
			});
			
			window.addEventListener('eventQuit', function(event){
				globalPersistence.update({}); // Update Savefile
				globalPersistence.args['manager'].loadScene('main_menu');
			});
			// CUSTOM GAME EVENTS 

			// KEYBOARD EVENTS
			
			$(window).bind('keyup', function(event){
				switch (event.keyCode){
					case 27: // ESCAPE
						if (paused){
							window.dispatchEvent(GameEvents.QuitEvent)
						} else {
							window.dispatchEvent(GameEvents.PauseEvent);
						}
						break;
					case 80: // PAUSE
						window.dispatchEvent(GameEvents.PauseEvent);
						break;

				};
			});
			// KEYBOARD EVENTS
		};

		this.update = function(delta){
			
			if (!ambient_music.loaded){
				ambient_music.update();
			};

			load_progress = (sky.load_progress + butterfly.load_progress);
			for (var i=0; i < static_objects.length;i++){
				load_progress += static_objects[i].load_progress;
			}
			loading_bar.current_value = load_progress;
			if (loaded){

				if (globalPersistence.args['controller']=='touch'){
					left_controller.update();
					right_controller.update();
				}

				if (paused){
					if (globalPersistence.args['controller']== 'gamepad'){
						gamepad = Controller.getActiveGamepads()[0];
						if (Controller.buttonPressed(gamepad.buttons[9])){
							window.dispatchEvent(GameEvents.PauseEvent);
						}
					}
					pause_menu.update({
						'total_time': total_time,
						'total_distance': total_distance,
						'pollen_collected': pollen_collected
					});

				} else {

					total_time += delta;
					evt_text.update(delta);
					weapon.update();
					// UPDATE SPRITES
					for (var i=0; i< static_objects.length; i++){
						static_objects[i].current_position = [
							static_objects[i].position[0] + world_offset[0],
							static_objects[i].position[1] + world_offset[1]
						];
					}
					sky.current_position = [
						sky.position[0] + world_offset[0],
						sky.position[1] + world_offset[1]
					];
					// UPDATE SPRITES

					// UPDATE CONTROLLER
					if (globalPersistence.args['controller'] == 'touch'){
						if (left_controller.active){
							var val = left_controller.getValue();
							butterfly.velocity = [
								val[0]/30 ,
								val[1]/30
							];						
						} else {
							butterfly.velocity = [0,0];
						}
					} else if (globalPersistence.args['controller']== 'mouse'){

					} else if (globalPersistence.args['controller']== 'gamepad'){
						player_1 = Controller.getActiveGamepads()[0];

						if (player_1){
							// Axis 0 his Horizontal Motion Axes
							butterfly.velocity = [
								(player_1.axes[0]*255)/30,
								(player_1.axes[1]*255)/30
							];
							// Attack Button X
							if (Controller.buttonPressed(player_1.buttons[0])){
								weapon.visible = true;
							} else {
								weapon.visible = false;
							}

							if (Controller.buttonPressed(player_1.buttons[9])){
								window.dispatchEvent(GameEvents.PauseEvent);
							}

						} else {
							globalPersistence.args['controller'] = Controller.detectControllers();
						}
					}
					// UPDATE CONTROLLER

					// UPDATE BUTTERFLY
					butterfly.update();

					if (butterfly.position[0] <= camera_slack[0]){
						world_offset[0] -= butterfly.velocity[0];
						butterfly.position[0] = camera_slack[0]+1;
					}
					if (butterfly.position[0] >= globalPersistence.args['screen_size'][0]-camera_slack[0]){
						world_offset[0] -= butterfly.velocity[0];
						butterfly.position[0] = (globalPersistence.args['screen_size'][0]-camera_slack[0]);
					}
					if (butterfly.position[1] <= camera_slack[1]){
						world_offset[1] -= butterfly.velocity[1];
						butterfly.position[1] = camera_slack[1];
					}
					if (butterfly.position[1] >= globalPersistence.args['screen_size'][1]){
						world_offset[1] -= butterfly.velocity[1];
						butterfly.position[1] = (globalPersistence.args['screen_size'][1]);
					}
					// UPDATE BUTTERFLY

					// UPDATE WORLD
					if (world_offset[0] > 0){
						world_offset[0] = 0;
						butterfly.position[0] = camera_slack[0]+1;
					}
					if (world_offset[0] < -4500){
						world_offset[0] = -4500;
						butterfly.position[0] = (globalPersistence.args['screen_size'][0]-camera_slack[0])+2;
					}
					if (world_offset[1] < 0){
						world_offset[1] = 0;
						butterfly.position[1] = globalPersistence.args['screen_size'][1]+2;						
					}
					if (world_offset[1] > 1000){
						world_offset[1] = 1000
						butterfly.position[1] = camera_slack[1]+2;
					}
					// UPDATE WORLD

				}
			};
		};

		this.render = function(screen){
			screen.fillStyle = 'rgb(0,0,0)';
			screen.fillRect(0, 0, globalPersistence.args['screen_size'][0], globalPersistence.args['screen_size'][1]);
			// LOADING SCREEN
			if (load_progress >= load_total){
				loaded = true;
			} else {
				loading_bar.render(screen);
				screen.fillStyle = 'rgb(255,255,255)';
				Helpers.renderTextRect(
					"Loading " + Math.floor((load_progress/load_total)*100) + "%",
					"bettyregular",
					56,
					450,
					[
						(globalPersistence.args['screen_size'][0]/4)+30,
						(globalPersistence.args['screen_size'][0]/4)-50
					],
					screen
				);
			}
			// LOADING SCREEN
			
			// GAME SCREEN
			if (loaded){
				sky.render(screen);
				if (evt_text.visible){
					evt_text.render(screen);
				};
				for (var i=0; i < static_objects.length; i++){
					static_objects[i].render(screen);					
				}

				weapon.render(screen);
				butterfly.render(screen);
				health_bar.render(screen);
				pollen_bar.render(screen);
				// HUD Heads up Display

				// Pause Menu
				if (paused){
					pause_menu.render(screen);
				};
				if (globalPersistence.args['controller']=='touch'){
					left_controller.render(screen);
					right_controller.render(screen);
				};
			// GAME SCREEN
			};		
		};
	};

	return (myGame);

}(GameScene || {});