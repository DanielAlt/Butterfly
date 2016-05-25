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

var OptionsAudio = function(myOptions){

  myOptions.spawn = function(globalPersistence){
    var loaded = false;
    var load_progress = 0;
    var bg_img = new Poster.spawn();
    var active_field = undefined;
    
    var options_menu = new ListBox.spawn({
      'options': {
          "Music": function(){
          },
          "SFX": function(){
          },
          "Mute": function(){
          },
          "Return": function(){
            globalPersistence.args['manager'].loadScene('options');
          }
      },
      'font': 'bettyregular',
      'font_size': 32,
      'color': 'rgb(0,0,0)',
      'select_color': 'rgba(200,0,150,.7)' ,
      'position': [30,165],
      'width': 300
    });

    var music_volume_slider = new Slider.spawnRange({
      'min': 0,
      'max': 10,
      'value': 10,
      'position': [355,135],
      'square_size': 20,
      'fg_color': 'rgba(0,0,0,.8)',
      'bg_color': 'rgba(200,0,150,.7)'
    });
    music_volume_slider.current_value = globalPersistence.args['music_volume'];

    var sfx_volume_slider = new Slider.spawnRange({
      'min': 0,
      'max': 10,
      'value': 10,
      'position': [355,180],
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
      'position': [355, 210],
      'width': 300
    });
    console.log(globalPersistence.args['mute']);
    if (globalPersistence.args['mute']){
      mute_toggle.setValue('On');    
    } else {
      mute_toggle.setValue('Off');  
    };

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
              if (active_field == 'Music'){
                music_volume_slider.current_value --;
                music_volume = music_volume_slider.getValue();
                ambient_sound.setVolume(music_volume);
                globalPersistence.update({'music_volume': music_volume});
              }
              if (active_field == 'SFX'){
                sfx_volume_slider.current_value --;
                sfx_volume = sfx_volume_slider.getValue();
                menu_sfx.setVolume(sfx_volume);
                globalPersistence.update({'sfx_volume': sfx_volume});
              };

              if (active_field == 'Mute'){
                mute_toggle.current_value --;
                mute = mute_toggle.getValue();
                if (mute == "On"){
                  ambient_sound.muteToggle(true);
                  menu_sfx.muteToggle(true);
                  globalPersistence.update({'mute': true});
                };
                if (mute == "Off"){
                  ambient_sound.muteToggle(false);
                  menu_sfx.muteToggle(false);
                  globalPersistence.update({'mute': false});
                };
              };
              menu_sfx.play();
              break;
            
            case 38:
              menu_sfx.play();
              break;

            case 39:
              if (active_field == 'Music'){
                music_volume_slider.current_value ++;
                music_volume = music_volume_slider.getValue();
                ambient_sound.setVolume(music_volume);
                globalPersistence.update({'music_volume': music_volume});
              };
              if (active_field == 'SFX'){
                sfx_volume_slider.current_value ++;
                sfx_volume = sfx_volume_slider.getValue();
                menu_sfx.setVolume(sfx_volume);
                globalPersistence.update({'sfx_volume': sfx_volume});
              };
              if (active_field == 'Mute'){
                mute_toggle.current_value ++;
                mute = mute_toggle.getValue();
                if (mute == "On"){
                  ambient_sound.muteToggle(true);
                  menu_sfx.muteToggle(true);
                  globalPersistence.update({'mute': true});
                };
                if (mute == "Off"){
                  ambient_sound.muteToggle(false);
                  menu_sfx.muteToggle(false);
                  globalPersistence.update({'mute': false});
                };
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
              break;
        };
      });
    };

    this.update = function(delta){
      music_volume_slider.update();
      sfx_volume_slider.update();
      mute_toggle.update();

      bg_img.update();
      options_menu.update();

      active_field = options_menu.getValue();
      if (!menu_sfx.loaded){
        menu_sfx.update();
      };
      if (!ambient_sound.loaded){
        ambient_sound.update();
      }
    };

    this.render = function(screen){
      screen.fillStyle = 'rgb(255,255,255)';
      screen.fillRect(0,0, globalPersistence.args['screen_size'][0], globalPersistence.args['screen_size'][1]);
      screen.fillStyle = 'rgb(0,0,0)';
      screen.font = "48px bettyregular";

      if (bg_img.loaded){

        bg_img.render(screen);
        screen.fillText("Audio", 30, 75);
        options_menu.render(screen);

        if (active_field == 'Mute'){
          screen.fillText("Toggle Mute", 355, 190);
          mute_toggle.render(screen);
        }

        if (active_field=='Music'){
            screen.fillText("Volume (" + ((music_volume_slider.current_value)/10)*100 + "%)", 355, 115);
            music_volume_slider.render(screen);
        };
        if (active_field=='SFX'){
            screen.fillText("Volume (" + ((sfx_volume_slider.current_value)/10)*100 + "%)", 355, 160);
            sfx_volume_slider.render(screen);
        };

      } else {
        screen.fillText("Loading", 30, 75);
      };
    };
  };

  return (myOptions);

}(OptionsAudio || {});