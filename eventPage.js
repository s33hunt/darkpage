var darken = false;

chrome.tabs.onUpdated.addListener(tabUpdated);
chrome.tabs.onActivated.addListener(tabActivated);

function tabUpdated(tabid, changeinfo, tab){
	if(changeinfo.status === "loading" || changeinfo.status === "complete"){
		sendDarkMessage();
	}
}
function tabActivated(){
	sendDarkMessage();
}

function sendDarkMessage(){
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.sendMessage(tab.id, {"darken": darken});
 	});
}