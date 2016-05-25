var SceneManager = function(myManager){

	myManager.spawn = function(globalPersistence){
		var scene_library = {
			"splash": SplashScreen,
			'main_menu': MainMenu,
			"credits": CreditsScene,
			"options": OptionsScene,
			"options_display": OptionsDisplay,
			"options_audio": OptionsAudio,
			"options_controls": OptionsControls,
			"game": GameScene
		};

		var scene_module = scene_library['game'];
		this.scene = new scene_module.spawn(globalPersistence);
		this.scene.init();

		this.loadScene = function(scene){
			var scene_module = scene_library[scene];
			this.scene = new scene_module.spawn(globalPersistence);
			this.scene.init()
		};
	}
	return (myManager);

}(SceneManager || {});