{
  chrome.action.onClicked.addListener((_tab) => {
    chrome.storage.local.get("url").then(({ url }) => {
      if (url) {
        chrome.tabs.create({
          url,
        });
      }
    });
  });
}
