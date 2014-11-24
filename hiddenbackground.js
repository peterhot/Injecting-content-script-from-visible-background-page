function click(e) {
            console.log ("Before: creating visiblebackground.html .....");
			chrome.tabs.create({url: chrome.extension.getURL('visiblebackground.html')}); // 24nov2014			
            console.log ("After:  creating visiblebackground.html .....");
}

chrome.browserAction.onClicked.addListener(click);