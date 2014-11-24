I want to make use of the UI (ie: button and textarea, etc..) on my background page. So I create a visible background from the hidden background page (hiddenbackground.html) using: chrome.tabs.create({url: chrome.extension.getURL('visiblebackground.html')});. But when try injecting content script in to a regular webpage using: chrome.tabs.executeScript(specTab.id, {file:  "script.js"});, Chrome complains saying: 

" Unchecked runtime.lastError while running tabs.executeScript: Cannot access contents of url "chrome-extension://omjklcnhgmbdjadleonimbbmimmilmhd/visiblebackground.html". Extension manifest must request permission to access this host.
    at Object.callback (chrome-extension://omjklcnhgmbdjadleonimbbmimmilmhd/visiblebackground.js:19:25)"

here is my manifest.json
{  "name"             : "retrieve info from optionPage and insert into a webpage",

   "version"          : "1.0",

   "description"      : "Step 2: copy text from option page to google Drawings",

   "manifest_version" : 2,

   "icons"            : { "64"  : "pp64.png"},
 
   "background"       : { "page"     :  "hiddenbackground.html"},
  
  "browser_action"   : { "default_title" : "option page to google Drawings",
 
    "default_icon"  : "pp64.png"},
   "permissions"      : ["background", "tabs", "http://*/*", "file://*/*", "https://*/*"]

}
