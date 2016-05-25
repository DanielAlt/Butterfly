var GameEvents = function(myEvents){

	myEvents.PauseEvent = new Event('eventPause');
	myEvents.QuitEvent = new Event('eventQuit');
	myEvents.MVolumeEvent = new Event('eventMVolume');
	myEvents.SFXVolumeEvent = new Event('eventSFXVolume');
	myEvents.MuteEvent = new Event('eventMute');
	myEvents.WeaponEvent = new Event('eventWeapon');

	return (myEvents);

}(GameEvents || {});