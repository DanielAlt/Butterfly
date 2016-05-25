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

var OptionsDisplay = function(myOptions){

  myOptions.spawn = function(globalPersistence){
    var loaded = false;
    var load_progress = 0;
    var bg_img = new Poster.spawn();

    var options_menu = new ListBox.spawn({
      'options': {
          "Resolution": function(){
          },
          "Display Mode": function(){

          },
          "Apply Changes": function(){

          },
          "Return": function(){
            globalPersistence.args['manager'].loadScene('options');
          }
      },
      'font': 'bettyregular',
      'font_size': 32,
      'color': 'rgb(0,0,0)',
      'select_color': 'rgba(200,0,150,.7)' ,
      'position': [30,145],
      'width': 300
    });

    active_field = undefined;

    var resolution_slider = new Slider.spawnList({
      'values': ["360p", "720p", "1080p", '1440p'],
      'font': 'bettyregular',
      'font_size': 32,
      'fg_color': 'rgb(0,0,0)',
      'bg_color': 'rgba(250,0,150,.7)',
      'position': [355, 110],
      'width': 300
    });
    resolution_slider.setValue(globalPersistence.args['screen_size'][1] + "p");

    var displaymode_slider = new Slider.spawnList({
      'values': ['Windowed', 'FullScreen'],
      'font': 'bettyregular',
      'font_size': 32,
      'fg_color': 'rgb(0,0,0)',
      'bg_color': 'rgba(250,0,150,.7)',
      'position': [355, 150],
      'width': 300
    });
    displaymode_slider.setValue(globalPersistence.args['display_mode']);

    
    var menu_sfx = new Sound.spawnSFX(
      'static/audio/MainMenu/ping.mp3', 
      globalPersistence.args['sfx_volume'],
      globalPersistence.args['mute']
    );
    
    var ambient_sound = new Sound.spawnAmbient(
      'static/audio/MainMenu/nature.mp3',
      globalPersistence.args['music_volume'],
      globalPersistence.args['mute']
    );

    this.init = function(){
      $(window).unbind();
      $(window).bind('keydown', function(e){
        options_menu.handle_events(e);

        switch(e.keyCode){
          case 37:
              if (active_field == "Resolution"){
                resolution_slider.current_value --;
              };
              if (active_field == 'Display Mode'){
                displaymode_slider.current_value --;
              };
              menu_sfx.play();
              break;
            case 38:
              menu_sfx.play();
              break;
            case 39:
              if (active_field == "Resolution"){
                resolution_slider.current_value ++;
              };
              if (active_field == 'Display Mode'){
                displaymode_slider.current_value ++;
              };
              menu_sfx.play();
              break;
            case 40:
              menu_sfx.play();
              break;
            case 13:
              menu_sfx.play();
              ambient_sound.stop();
              key = options_menu.getValue();
              options_menu.args['options'][key]();

              if (key == 'Apply Changes'){
                var display_mode = displaymode_slider.getValue();
                var dimens = Display.getDimensions(resolution_slider.getValue());
                globalPersistence.update({
                  'screen_size': dimens,
                  'display_mode': display_mode,
                });
                Display.resize(
                  globalPersistence.args['screen_size'][0], 
                  globalPersistence.args['screen_size'][1]
                );

                if (globalPersistence.args['display_mode']=='FullScreen'){
                  Display.requestFullScreen();
                };
                if (globalPersistence.args['display_mode']=='Windowed'){
                  Display.requestWindowed();
                };
              };
              break;
        };
      });
    };

    this.update = function(delta){
      active_field = options_menu.getValue();
      bg_img.update();
      displaymode_slider.update();
      resolution_slider.update();
      if (!menu_sfx.loaded){
        menu_sfx.update();
      };
      if (!ambient_sound.loaded){
        ambient_sound.update();
      }
      options_menu.update();
    };

    this.render = function(screen){
      screen.fillStyle = 'rgb(255,255,255)';
      screen.fillRect(0,0,globalPersistence.args['screen_size'][0], globalPersistence.args['screen_size'][1]);
      screen.fillStyle = 'rgb(0,0,0)';
      screen.font = "48px bettyregular";

      if (bg_img.loaded){
        
        bg_img.render(screen);
        screen.fillText("Display", 30, 75);
        options_menu.render(screen);

        if (active_field == "Resolution"){
          resolution_slider.render(screen);
        };
        
        if (active_field == 'Display Mode'){
          displaymode_slider.render(screen);
        };

      } else {
        screen.fillText("Loading...", 30, 75);
      }
    };
  };

  return (myOptions);
}(OptionsDisplay || {});