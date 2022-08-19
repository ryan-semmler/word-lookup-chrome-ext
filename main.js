searchEtymonline = function(info, tab) {
  console.log(tab);
  var query = info.selectionText;
  chrome.tabs.create({
    url: `https://www.etymonline.com/word/${query}`
  });
}

chrome.contextMenus.create({
  "id": "etym",
  "title": "Search Etymonline",
  "contexts": ["selection"],
  "onclick": searchEtymonline
});