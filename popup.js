var bttn = document.getElementById('bttn'),
	state = "OFF",
	darkenClass = "darken";

bttn.addEventListener('click', bttnClick);

chrome.runtime.getBackgroundPage(function(win){
	if(win.darken){
		state = "ON";
	}else{
		state = "OFF";
	}
	bttn.innerHTML = state;
});

function bttnClick (){
	chrome.runtime.getBackgroundPage(function(win){
		if(win.darken){
			state = "OFF";
			win.darken = false;
		}else{
			state = "ON";
			win.darken = true;
		}
		bttn.innerHTML = state;
		win.sendDarkMessage();
	});
}