$(document).ready(function(){
	
	
	var myGame = function(args){

		// Global Variables
		var _version = args['version'];
		var _app_name = args['app_name'];
		var _fps = args['fps'];
		var _butterfly = (
			'      899X7                                                X8997        \n' +
			'     g999999Wm_                                         ,gm999999W.     \n' +
			'   gW99*~~~~VM9Ws                                     ,m99*~~~~VM99m.   \n' +
			'  g999`       "*99i                                  W9Af        Y99W.  \n' +
			'  999[          "*9W_                             ,g9Af           999b  \n' +
			'  999W            "*9W.                          g9Af            i9999  \n' +
			'  9999W_            "V9W.       \.    ./       g9A~            ,g99999  \n' +
			'  99999**Nm__          ~MW_.     N.  .N     _g9f`         ,_gm**M99999  \n' +
			'  9999|   89999mms___    ~MWm.    [ ]`    gm9f`   ,___mmW9999|   8999P  \n' +
			'  99999mmW99A***M9999999mms2M9s_,g+=Ye.,_W95_mmW9999999****999mmW9999[  \n' +
			'  999999999`     "9999Af`  ~VM999P    9999*~`  ~*9999P      Y99999999[  \n' +
			'  M9999AM99s.   ,g9999`       "99[    99P        Y999W_    _W99*99999!  \n' +
			'  ]9999b"*999999999999b       _999.  d99b.      ,999999999999Af,99999   \n' +
			'  "M9999i "V*9999999999Wm__gmW9999[  99999mm__gm9999999999A*~  W9999f   \n' +
			'   M9999s      ~~~~~~~~~~~~LmW99f   "M99ms7~~~~~~~~~~~`     ,W9999!     \n' +
			'     V9999Ws_        ___mmW99999[      999999mms__.       ,_m9999A`     \n' +
			'      "~*999999999999A**f~   ]9A[      A99   "~***999999999999Af~       \n' +
			'          2999A*~~`          d9 9     ][]9.          ~~V*999K.          \n' +
			'       ,gW9A~             ,_W9! 9[    9[ M9s_             "V99m_        \n' +
			'      i999A            ,_W99f` i9[    9W  ~M99s_            !999W       \n' +
			'      !9999ms_______mW99Af`   d99A.  /999.   ~*999ms_______mW999A       \n' +
			'       Y9999f~~~~~~~~~`     gW9f~ +_z`"~M9m.     ~~~~~~~~~~M9999`       \n' +
			'        V999            ,gm9Af`          ~*9Wm_            ]99A`        \n' +
			'          ~*Nm______mmW99Af                 "*999mms_____gm*f`          \n' +
			'             99999999                              99999999             \n\n' +
			'                    [' + _app_name + " " + _version + "]"
		);
		console.log(_butterfly);
		// Global Variables


		// Persistence		
		var globalPersistence = new Persistence.spawn({
			'screen_size': args['screen_size'],
			'controller': Controller.assignController()
		});

		globalPersistence.update({
			'manager': new SceneManager.spawn(globalPersistence)
		});
		// Persistence		
		

		// Main Function
		this.main = function(){
			Display.resize(
				globalPersistence.args['screen_size'][0],
				globalPersistence.args['screen_size'][1]
			)
			var screen = document.getElementById('game_screen').getContext('2d');			
			var now = (new Date()).getTime();
			var then = (new Date()).getTime();
			var delta =  now - then;

			// Benchmarking for Test Build
			if (args['dist_type'] == 'test'){
				var now_render = (new Date()).getTime();
				var then_render = (new Date()).getTime();
				var delta_render = (new Date()).getTime();

				var now_update = (new Date()).getTime();
				var then_update = (new Date()).getTime();
				var delta_update = (new Date()).getTime();

				var filter_strength = 20;
				var recorded_fps = 0;
			}

			var mainLoop = function(){

				// Test Build Main Loop
				if (args['dist_type'] == 'test'){
					// UPDATE SCENE
					now_update = (new Date()).getTime();
					globalPersistence.args['manager'].scene.update(delta);
					delta_update = now_update - then_update;
					then_update = now_update;

					// HANDLE EVENTS
					// globalPersistence.args['manager'].scene.handle_events(events);


					// RENDER SCENE
					now_render = (new Date()).getTime();
					globalPersistence.args['manager'].scene.render(screen);
					delta_render = now_render - then_render;
					then_render = now_render;

					// FPS FILTERING
					now = (new Date()).getTime();
					delta =  now - then;
					then = now;
					recorded_fps += (delta-recorded_fps) / filter_strength;

					// Stat UNIT
					screen.fillStyle = 'rgba(0,0,0,.9)';
					screen.fillRect(
						globalPersistence.args['screen_size'][0]-250,
						15,
						240,
						120
					);
					screen.fillStyle = 'rgb(255,0,0)';
					screen.font = '28px bettyregular';
					screen.fillText(
						"Game: " + delta_update + " ms",
						globalPersistence.args['screen_size'][0]-215,
						55 
					);
					screen.fillStyle = 'rgb(0,255,0)';
					screen.fillText(
						"Render: " + delta_render + " ms",
						globalPersistence.args['screen_size'][0]-215,
						85 
					);
					screen.fillStyle = 'rgb(0,255,255)';
					screen.fillText(
						"FPS: " + Math.floor(1000/recorded_fps), 
						globalPersistence.args['screen_size'][0]-215, 
						115 
					);
					
					// Watermark
					var watermark = "(c) 2016 Daniel Altenburg [" + _app_name + " " + _version + "]";
					screen.fillStyle = 'rgba(255,255,255,.8)';
					screen.font = "18px bettyregular";
					screen.fillText(
						watermark, 
						5, 
						globalPersistence.args['screen_size'][1]-15
					);
					
				// The Production Build Main LOOP
				} else {
					globalPersistence.args['manager'].scene.update(delta);
					// globalPersistence.args['manager'].scene.handle_events(events);			
					globalPersistence.args['manager'].scene.render(screen);
				}
								
				window.requestAnimationFrame(mainLoop);
			};
			mainLoop();
		};
		// Main Function
	};

	// Initializing the Game
	$("body").append('<canvas id="game_screen" width="" height=""></canvas>');
	game = new myGame({
		'screen_size': [1280, 720],
		'app_name': "Schmetterling",
		'version': "Test 1.0.0 (Alpha)",
		'fps': 40,
		'dist_type': 'test'
	});
	game.main()
	// Initializing the Game

});