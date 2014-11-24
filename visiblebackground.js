function init() {
         chrome.tabs.query({currentWindow:true, active:true}, function(tabs) {
            var specTab = tabs[0];
         // chrome.tabs.executeScript(specTab.id, {file:  "js/jquery-2.0.3.js"});
            chrome.tabs.executeScript(specTab.id, {file:  "script.js"});
        });
}
init();