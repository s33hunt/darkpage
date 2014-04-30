chrome.runtime.onMessage.addListener(function(message) {
	console.log(message)

    if (message.darken){
      	document.body.parentElement.classList.add('darken')
    }else{
    	document.body.parentElement.classList.remove('darken')
    }
});
