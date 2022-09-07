searchEtymonline = function(info) {
  var query = info.selectionText;
  chrome.tabs.create({
    url: `https://www.etymonline.com/word/${query}`
  });
}

chrome.contextMenus.create({
  "id": "etym",
  "title": "Search Etymonline",
  "contexts": ["selection"]
});

chrome.contextMenus.onClicked.addListener(
  searchEtymonline
)