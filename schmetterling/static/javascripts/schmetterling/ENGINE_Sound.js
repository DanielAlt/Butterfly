var Sound = function(mySoundEffect){

	mySoundEffect.spawnSFX = function(path, volume=1, mute=false){
		this.path = path;
		this.loaded = false;
		this.load_progress = 0;

		this.mute = mute;
		this.volume = volume/10;
		this.audio = Helpers.loadAudio(this.path, this);

		if (this.mute){
			this.audio.volume = 0;
		} else {
			this.audio.volume = this.volume;
		}

		this.play = function(){
			if (this.loaded){
				this.audio.pause();
				this.audio.currentTime = 0;
				this.audio.play();				
			};
		};
		
		this.update = function(){
			if (this.load_progress >= 1){
				this.loaded = true;
			};
			// if ((!this.mute) && (this.audio.volume != this.volume)){
			// 	this.audio.volume = this.volume;
			// };
			// if ((this.mute) && (this,audio.volume != 0)){
			// 	this.audio.volume = 0;
			// };
		};

		this.setVolume = function(volume){
			this.volume = volume/10;
			if (!this.mute){
				this.audio.volume = this.volume;
			};
		}
		this.getVolume = function(volume){
			return (this.audio.volume*10);
		}
		this.muteToggle = function(mute=undefined){

			if (mute == undefined){
				if (this.mute){
					this.audio.volume = 0;
				} else {
					this.audio.volume = this.volume;
				}

			} else {
				if (mute){
					this.audio.volume = 0;
				} else {
					this.audio.volume = this.volume;
				}
			}
		};
	};

	mySoundEffect.spawnAmbient = function(path, volume=1, mute=false){
		this.path = path;
		this.loaded = false;

		this.load_progress = 0;
		this.audio = Helpers.loadAudio(this.path, this);

		this.mute = mute;
		this.volume = volume/10;

		
		if (this.mute){
			this.audio.volume = 0;
		} else {
			this.audio.volume = this.volume;
		}

		this.audio.addEventListener('ended', function(){
			this.currentTime = 0;
			this.play();
		}, false);

		this.update = function(){
			if (this.load_progress >=1){
				this.loaded = true;
				this.audio.play();
			};
		};
		
		this.stop = function(){
			this.audio.pause();
			this.audio.currentTime = 0;
		}
		
		this.getVolume = function(volume){
			return (this.audio.volume*10);
		};
		
		this.setVolume = function(volume){
			this.volume = volume/10;
			if (!this.mute){
				this.audio.volume = this.volume;
			};
		}

		this.muteToggle = function(mute=undefined){
			if (mute == undefined){
				console.log('should not be getting this');
				if (this.mute){
					this.audio.volume = 0;
				} else {
					this.audio.volume = this.volume;
				}

			} else {
				if (mute){
					this.audio.volume = 0;
				} else {
					this.audio.volume = this.volume;
				}
			}
		};

	};

	return (mySoundEffect);

}(Sound || {});